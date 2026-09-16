import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HiringPartners from './components/HiringPartners';
import CourseGrid from './components/CourseGrid';
import CareerPath from './components/CareerPath';
import WhyChooseUs from './components/WhyChooseUs';
import StatsBanner from './components/StatsBanner';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import LocationsSection from './components/LocationsSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import EnquireModal from './components/EnquireModal';
import SearchModal from './components/SearchModal';
import ChatbotWidget from './components/ChatbotWidget';

// Dedicated Pages
import CourseDetailPage from './pages/CourseDetailPage';
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import PlacedStudentsPage from './pages/PlacedStudentsPage';
import JobsInternshipsPage from './pages/JobsInternshipsPage';
import ResourcesPage from './pages/ResourcesPage';
import BranchesPage from './pages/BranchesPage';

import { COURSES } from './data/courses';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [enquireCourseName, setEnquireCourseName] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Helper to parse route from current URL hash/query
  const syncRouteFromUrl = () => {
    const hash = window.location.hash;
    const search = window.location.search;

    // Check course param in hash or search, e.g. #/course/python-full-stack or ?course=python-full-stack
    let courseId = null;
    if (hash.includes('/course/')) {
      courseId = hash.split('/course/')[1]?.split('?')[0];
    } else if (hash.includes('#course-')) {
      courseId = hash.replace('#course-', '');
    } else if (search.includes('course=')) {
      const params = new URLSearchParams(search);
      courseId = params.get('course');
    }

    if (courseId) {
      const foundCourse = COURSES.find(c => c.id === courseId || c.id === decodeURIComponent(courseId) || c.title.toLowerCase().replace(/\s+/g, '-') === courseId);
      if (foundCourse) {
        setSelectedCourse(foundCourse);
        setCurrentPage('course-detail');
        window.scrollTo(0, 0);
        return;
      }
    }

    // Check page views in hash
    if (hash.includes('#corporate')) {
      setCurrentPage('corporate');
    } else if (hash.includes('#placed-students')) {
      setCurrentPage('placed-students');
    } else if (hash.includes('#jobs-internships')) {
      setCurrentPage('jobs-internships');
    } else if (hash.includes('#resources')) {
      setCurrentPage('resources');
    } else if (hash.includes('#branches')) {
      setCurrentPage('branches');
    } else {
      setCurrentPage('home');
      setSelectedCourse(null);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    syncRouteFromUrl();
    window.addEventListener('hashchange', syncRouteFromUrl);
    window.addEventListener('popstate', syncRouteFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncRouteFromUrl);
      window.removeEventListener('popstate', syncRouteFromUrl);
    };
  }, []);

  const handleOpenEnquire = (courseTitle = '') => {
    setEnquireCourseName(courseTitle);
    setIsEnquireOpen(true);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
    window.history.pushState({ courseId: course.id }, '', `#/course/${course.id}`);
    window.scrollTo(0, 0);
  };

  const handleNavigate = (view, targetId = null) => {
    setCurrentPage(view);
    setSelectedCourse(null);
    
    if (view === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${view}`);
    }

    window.scrollTo(0, 0);

    if (view === 'home' && targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] relative">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquire={(title) => handleOpenEnquire(title)}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content View Switcher */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero
              onOpenEnquire={() => handleOpenEnquire()}
              onExploreCourses={() => handleNavigate('home', 'courses')}
            />

            <HiringPartners />

            <CourseGrid
              onSelectCourse={handleSelectCourse}
            />

            <CareerPath
              onOpenEnquire={() => handleOpenEnquire()}
            />

            <WhyChooseUs
              onOpenEnquire={() => handleOpenEnquire()}
            />

            <StatsBanner />

            <Testimonials />

            <FaqSection />

            <LocationsSection />

            <CtaBanner
              onOpenEnquire={() => handleOpenEnquire()}
            />
          </>
        )}

        {currentPage === 'course-detail' && selectedCourse && (
          <CourseDetailPage
            course={selectedCourse}
            onSelectCourse={handleSelectCourse}
            onOpenEnquire={(title) => handleOpenEnquire(title)}
            onNavigateHome={() => handleNavigate('home', 'courses')}
          />
        )}

        {currentPage === 'corporate' && (
          <CorporateTrainingPage
            onOpenEnquire={(title) => handleOpenEnquire(title)}
          />
        )}

        {currentPage === 'placed-students' && (
          <PlacedStudentsPage
            onOpenEnquire={(title) => handleOpenEnquire(title)}
          />
        )}

        {currentPage === 'jobs-internships' && (
          <JobsInternshipsPage
            onOpenEnquire={(title) => handleOpenEnquire(title)}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onOpenEnquire={(title) => handleOpenEnquire(title)}
          />
        )}

        {currentPage === 'branches' && (
          <BranchesPage
            onOpenEnquire={(title) => handleOpenEnquire(title)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        defaultCourse={enquireCourseName}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleSelectCourse}
      />

      {/* Techmaster AI Chatbot Floating Widget */}
      <ChatbotWidget
        onSelectCourse={handleSelectCourse}
        onOpenEnquire={(title) => handleOpenEnquire(title)}
      />
    </div>
  );
}
