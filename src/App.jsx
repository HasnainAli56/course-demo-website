import React, { useState } from 'react';
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
import CourseDetailModal from './components/CourseDetailModal';
import SearchModal from './components/SearchModal';
import ChatbotWidget from './components/ChatbotWidget';

// Dedicated Pages
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import PlacedStudentsPage from './pages/PlacedStudentsPage';
import JobsInternshipsPage from './pages/JobsInternshipsPage';
import ResourcesPage from './pages/ResourcesPage';
import BranchesPage from './pages/BranchesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [enquireCourseName, setEnquireCourseName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenEnquire = (courseTitle = '') => {
    setEnquireCourseName(courseTitle);
    setIsEnquireOpen(true);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleNavigate = (view, targetId = null) => {
    setCurrentPage(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

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

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnquireThisCourse={(title) => handleOpenEnquire(title)}
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
