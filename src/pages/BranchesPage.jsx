import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Navigation, 
  Star, 
  X, 
  CheckCircle2, 
  Building, 
  GraduationCap, 
  UserCheck, 
  BadgeCheck, 
  Handshake, 
  Presentation,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const CHENNAI_BRANCHES = [
  {
    id: 'c1',
    name: 'Techmaster Velachery',
    address: 'No 1A, Sai Adhithya Building, Taramani Link Road, Velachery, Chennai, Tamil Nadu 600042',
    landmark: 'Opposite to : Velachery Main Bus Stand & Next to Athipathi Hospital',
    phone: '8925913391 / 8925913392',
    mapQuery: 'Techmaster+Velachery+Chennai',
    reviews: [
      { author: 'Karthik R.', rating: 5, comment: 'Excellent practical training for Python & Fullstack. Labs are 24/7 accessible.' },
      { author: 'Swetha M.', rating: 5, comment: 'Got placed in Infosys with 6.5 LPA package through Velachery placement drive.' }
    ]
  },
  {
    id: 'c2',
    name: 'Techmaster Tambaram',
    address: 'No:31, Alagesan Street, West Tambaram, Chennai - 600 045',
    landmark: '(Backside Tambaram Main Bus Stand & Near Railway Station)',
    phone: '8925913395 / 8925913396',
    mapQuery: 'Techmaster+Tambaram+Chennai',
    reviews: [
      { author: 'Vignesh K.', rating: 5, comment: 'Best AWS DevOps hands-on guidance. Faculty is very friendly and supportive.' }
    ]
  },
  {
    id: 'c3',
    name: 'Techmaster OMR',
    address: 'No 5/337, 2nd Floor, Vinayaga Avenue, Oggiyamduraipakkam, OMR, Chennai-600096',
    landmark: '(Near Cognizant & Oggiyamduraipakkam Bus Stop)',
    phone: '8925913389 / 8925913390',
    mapQuery: 'Techmaster+OMR+Chennai',
    reviews: [
      { author: 'Deepak S.', rating: 5, comment: 'Right in IT corridor. Very convenient location with top-notch lab infrastructure.' }
    ]
  },
  {
    id: 'c4',
    name: 'Techmaster Porur',
    address: 'No 100/5, 1st Floor, Trunk Road, Lakshmi Nagar, Porur, Chennai - 600 116',
    landmark: 'Next To Saravana Stores',
    phone: '8925913397 / 8925913398',
    mapQuery: 'Techmaster+Porur+Chennai',
    reviews: [
      { author: 'Ananya P.', rating: 5, comment: 'Awesome Data Analytics syllabus. Completed PowerBI project with expert mentor.' }
    ]
  },
  {
    id: 'c5',
    name: 'Techmaster Anna Nagar',
    address: '53-K, 1st Floor, W-Block, 4th Street, Anna Nagar, Chennai - 600 040',
    landmark: 'Opp to: Kandasamy College / Roundana',
    phone: '8925913393 / 8925913394',
    mapQuery: 'Techmaster+Anna+Nagar+Chennai',
    reviews: [
      { author: 'Ramesh V.', rating: 5, comment: 'Very near to Anna Nagar Metro. Great Java Fullstack corporate training.' }
    ]
  },
  {
    id: 'c6',
    name: 'Techmaster T. Nagar',
    address: 'No.136, Habibullah Road, T.Nagar, Chennai - 600 017',
    landmark: 'Near US Consulate & Shopping Hub',
    phone: '8925913393 / 8925913394',
    mapQuery: 'Techmaster+T+Nagar+Chennai',
    reviews: [
      { author: 'Pooja M.', rating: 5, comment: 'High quality Software Testing course with Selenium live project practice.' }
    ]
  },
  {
    id: 'c7',
    name: 'Techmaster Thiruvanmiyur',
    address: '81, Lattice Bridge Road,(Kalki Krishnamoorthy Salai), Thiruvanmiyur, Chennai, Tamil Nadu 600041',
    landmark: 'Opposite: Jeyanthi Theatre',
    phone: '8925913391 / 8925913392',
    mapQuery: 'Techmaster+Thiruvanmiyur+Chennai',
    reviews: [
      { author: 'Santhosh B.', rating: 5, comment: 'Great atmosphere, small batch size, and individual attention from trainers.' }
    ]
  },
  {
    id: 'c8',
    name: 'Techmaster Siruseri',
    address: 'No. 40/71, Sathya Dev Avenue Extn Street, OMR Road, Egatoor, Navallur, Siruseri, Chennai, Tamil Nadu 600130',
    landmark: 'Near SIPCOT IT Park Gate',
    phone: '8925913389 / 8925913390',
    mapQuery: 'Techmaster+Siruseri+Chennai',
    reviews: [
      { author: 'Dinesh K.', rating: 5, comment: 'Direct placement referrals to Siruseri SIPCOT IT companies.' }
    ]
  }
];

const BANGALORE_BRANCHES = [
  {
    id: 'b1',
    name: 'Techmaster BTM Layout',
    address: 'Outer Ring Road, 2nd Stage, Near AXA Building, BTM Layout, Bangalore, Karnataka 560076',
    landmark: 'Near Silk Board Junction & BTM Bus Stand',
    phone: '8925913381 / 8925913382',
    mapQuery: 'Techmaster+BTM+Layout+Bangalore',
    reviews: [
      { author: 'Arjun N.', rating: 5, comment: 'Top-tier Cloud & DevOps training center in Bangalore. 100% recommended.' }
    ]
  },
  {
    id: 'b2',
    name: 'Techmaster Marathahalli',
    address: 'Varthur Main Road, Opposite Innovative Multiplex, Marathahalli, Bangalore, Karnataka 560037',
    landmark: 'Near Marathahalli Bridge',
    phone: '8925913383 / 8925913384',
    mapQuery: 'Techmaster+Marathahalli+Bangalore',
    reviews: [
      { author: 'Nisha R.', rating: 5, comment: 'Great Java Fullstack mentors and excellent placement cell assistance.' }
    ]
  },
  {
    id: 'b3',
    name: 'Techmaster Electronic City',
    address: 'Hosur Main Road, Phase 1, Opposite Wipro Gate 5, Electronic City, Bangalore, Karnataka 560100',
    landmark: 'Opposite Wipro Tech Park',
    phone: '8925913385 / 8925913386',
    mapQuery: 'Techmaster+Electronic+City+Bangalore',
    reviews: [
      { author: 'Harish M.', rating: 5, comment: 'Convenient location for IT professionals working in E-City.' }
    ]
  },
  {
    id: 'b4',
    name: 'Techmaster HSR Layout',
    address: '27th Main Road, Sector 1, Near Agara Lake, HSR Layout, Bangalore, Karnataka 560102',
    landmark: 'Near HSR Startup Hub',
    phone: '8925913387 / 8925913388',
    mapQuery: 'Techmaster+HSR+Layout+Bangalore',
    reviews: [
      { author: 'Kavita P.', rating: 5, comment: 'Awesome AI & Data Science bootcamps with hands-on GPU labs.' }
    ]
  }
];

const CONTACT_DEPARTMENTS = [
  {
    id: 1,
    title: 'Corporate Training',
    email: 'corpsale@techmaster.in',
    phone: '+91 89259 58907',
    icon: Building,
    bgColor: 'bg-sky-500 text-white'
  },
  {
    id: 2,
    title: 'Student Query',
    email: 'support@techmaster.in',
    phone: '+91 84474 46138',
    icon: GraduationCap,
    bgColor: 'bg-rose-500 text-white'
  },
  {
    id: 3,
    title: 'Admission Info',
    email: 'enquiry@techmaster.in',
    phone: '+91 76691 00251',
    icon: UserCheck,
    bgColor: 'bg-emerald-500 text-white'
  },
  {
    id: 4,
    title: 'HR & Placement',
    email: 'placement@techmaster.in',
    phone: '+91 89259 58900',
    icon: BadgeCheck,
    bgColor: 'bg-purple-500 text-white'
  },
  {
    id: 5,
    title: 'Become A Partner',
    email: 'admin@techmaster.in',
    phone: '+91 89259 58921',
    icon: Handshake,
    bgColor: 'bg-cyan-500 text-white'
  },
  {
    id: 6,
    title: 'Become Our Instructor',
    email: 'hr@techmaster.in',
    phone: '+91 89259 58900',
    icon: Presentation,
    bgColor: 'bg-rose-600 text-white'
  }
];

export default function BranchesPage({ onOpenEnquire }) {
  const [activeCity, setActiveCity] = useState('Chennai');
  const [selectedReviewBranch, setSelectedReviewBranch] = useState(null);
  const [selectedMapBranch, setSelectedMapBranch] = useState(null);

  const branches = activeCity === 'Chennai' ? CHENNAI_BRANCHES : BANGALORE_BRANCHES;

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans">
      
      {/* 1. Blue Header Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-block bg-blue-900/40 border border-blue-400/30 px-6 py-2 rounded-lg backdrop-blur-sm shadow-sm">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Techmaster Technologies Branches
            </h1>
          </div>
          <p className="text-blue-100 text-xs sm:text-sm font-medium">
            Explore our state-of-the-art training centers across Chennai and Bangalore equipped with 24/7 practical IT labs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mt-8">
        
        {/* 2. City Selector Tabs (Chennai / Bangalore) */}
        <div className="flex justify-center border-b border-slate-200">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveCity('Chennai')}
              className={`flex items-center gap-2 pb-3.5 px-4 font-extrabold text-base transition-all relative ${
                activeCity === 'Chennai'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-5 h-5 text-blue-600" />
              <span>Chennai</span>
            </button>

            <button
              onClick={() => setActiveCity('Bangalore')}
              className={`flex items-center gap-2 pb-3.5 px-4 font-extrabold text-base transition-all relative ${
                activeCity === 'Bangalore'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-5 h-5 text-blue-600" />
              <span>Bangalore</span>
            </button>
          </div>
        </div>

        {/* 3. Branch Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div 
              key={branch.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Branch Name with Pink MapPin Icon */}
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <h3 className="text-base font-extrabold text-indigo-950 leading-snug">
                    {branch.name}
                  </h3>
                </div>

                {/* Address details */}
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
                  <p>{branch.address}</p>
                  
                  {branch.landmark && (
                    <p className="text-slate-500 font-normal">
                      <span className="font-semibold text-slate-700">Landmark:</span> {branch.landmark}
                    </p>
                  )}

                  {/* Phone numbers */}
                  <div className="flex items-center gap-2 text-slate-800 font-bold pt-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Reach Us & Reviews */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedMapBranch(branch)}
                  className="flex-1 bg-indigo-900 hover:bg-indigo-950 text-white font-black text-xs py-2 px-3 rounded-full transition-colors text-center shadow-sm"
                >
                  Reach Us
                </button>

                <button
                  onClick={() => setSelectedReviewBranch(branch)}
                  className="flex-1 border border-indigo-900 hover:bg-indigo-50 text-indigo-900 font-black text-xs py-2 px-3 rounded-full transition-colors text-center"
                >
                  Reviews
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 4. Contact Us Section */}
        <section className="space-y-8 pt-8 border-t border-slate-200">
          
          {/* Section Header with Blue Accent Bar */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-blue-600">
              Contact Us
            </h2>
          </div>

          {/* 6 Department Cards (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACT_DEPARTMENTS.map((dept) => {
              const IconComponent = dept.icon;
              return (
                <div 
                  key={dept.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-5"
                >
                  {/* Round Colorful Icon Box */}
                  <div className={`w-14 h-14 rounded-full ${dept.bgColor} flex items-center justify-center shrink-0 shadow-md`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Department Details */}
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-slate-900">
                      {dept.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`mailto:${dept.email}`} className="text-blue-700 hover:underline">
                        {dept.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`tel:${dept.phone}`} className="hover:text-blue-700">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

      </div>

      {/* --- Reach Us Modal --- */}
      {selectedMapBranch && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 relative">
            <button 
              onClick={() => setSelectedMapBranch(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-pink-600 shrink-0" />
              <div>
                <h3 className="text-lg font-black text-slate-900">{selectedMapBranch.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{activeCity} Campus Location</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-700 font-medium">
              <p><strong>Address:</strong> {selectedMapBranch.address}</p>
              {selectedMapBranch.landmark && (
                <p><strong>Landmark:</strong> {selectedMapBranch.landmark}</p>
              )}
              <p><strong>Phone:</strong> {selectedMapBranch.phone}</p>
              <p><strong>Timings:</strong> Monday – Sunday: 8:00 AM – 9:00 PM</p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href={`https://maps.google.com/?q=${selectedMapBranch.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={() => {
                  const bName = selectedMapBranch.name;
                  setSelectedMapBranch(null);
                  onOpenEnquire(`Walk-in Visit: ${bName}`);
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Book Walk-in Slot</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Reviews Modal --- */}
      {selectedReviewBranch && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 relative">
            <button 
              onClick={() => setSelectedReviewBranch(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-500 fill-amber-400 shrink-0" />
              <div>
                <h3 className="text-lg font-black text-slate-900">{selectedReviewBranch.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                  <span>Rating: 4.9 / 5.0</span>
                  <span className="text-amber-500">★★★★★</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {selectedReviewBranch.reviews?.map((rev, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span>{rev.author}</span>
                    <span className="text-amber-500">★★★★★</span>
                  </div>
                  <p className="text-slate-600 font-medium italic">"{rev.comment}"</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedReviewBranch(null)}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all"
            >
              Close Reviews
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
