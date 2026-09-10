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

export default function App() {
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

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <Navbar
        onOpenEnquire={() => handleOpenEnquire()}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenEnquire={() => handleOpenEnquire()}
          onExploreCourses={() => {
            const coursesSec = document.getElementById('courses');
            if (coursesSec) coursesSec.scrollIntoView({ behavior: 'smooth' });
          }}
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
    </div>
  );
}
