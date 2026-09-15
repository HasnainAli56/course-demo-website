import { jsPDF } from 'jspdf';

export function generateCoursePDF(course) {
  if (!course) return;

  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);

  // Brand Colors (RGB)
  const COLOR_TEAL = [3, 77, 84];        // #034D54 Deep Teal
  const COLOR_TEAL_LIGHT = [230, 244, 243]; // #E6F4F3 Soft Mint
  const COLOR_NAVY = [15, 23, 42];       // #0F172A Slate 900
  const COLOR_PEACH = [253, 238, 227];   // #FDEEE3 Warm Peach
  const COLOR_GOLD = [217, 119, 6];      // Amber 600
  const COLOR_TEXT = [51, 65, 85];       // Slate 700
  const COLOR_MUTED = [100, 116, 139];   // Slate 500
  const COLOR_WHITE = [255, 255, 255];
  const COLOR_EMERALD = [16, 185, 129];  // Emerald 500

  let y = margin;

  // Helper to add footer to all pages
  const addFooter = (pageNum, totalPages) => {
    doc.setPage(pageNum);
    
    // Top border line for footer
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 14, pageWidth - margin, pageHeight - 14);

    // Footer Text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COLOR_MUTED);
    doc.text('Techmaster Academy • ISO 9001:2015 Certified IT Institute • www.techmaster.in', margin, pageHeight - 8);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 8, { align: 'right' });
  };

  // Helper to check page bounds & add page if needed
  const checkPageOverflow = (heightNeeded = 15) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;

      // Repeat compact header on page 2+
      doc.setFillColor(...COLOR_TEAL);
      doc.rect(0, 0, pageWidth, 12, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(...COLOR_WHITE);
      doc.text(`Techmaster • ${course.title} Syllabus`, margin, 8);
      doc.text('Official Curriculum Guide', pageWidth - margin, 8, { align: 'right' });

      y = 22;
    }
  };

  // ==========================================
  // 1. TOP BRAND HEADER BANNER
  // ==========================================
  doc.setFillColor(...COLOR_TEAL);
  doc.rect(0, 0, pageWidth, 45, 'F');

  // Decorative Accent Bar
  doc.setFillColor(253, 238, 227); // Warm Peach
  doc.rect(0, 43, pageWidth, 2, 'F');

  // Company Brand Name & Badge
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...COLOR_WHITE);
  doc.text('TECHMASTER', margin, 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(204, 251, 241); // Light mint
  doc.text('LEARN • GROW • BUILD YOUR FUTURE', margin, 24);

  // Contact Info Top Right
  doc.setFontSize(8);
  doc.setTextColor(...COLOR_WHITE);
  doc.text('Phone: +91 76691 00251 / +91 99533 06008', pageWidth - margin, 16, { align: 'right' });
  doc.text('Email: admissions@techmaster.in', pageWidth - margin, 22, { align: 'right' });
  doc.text('Web: www.techmaster.in', pageWidth - margin, 28, { align: 'right' });

  // Official Syllabus Badge Top Right
  doc.setFillColor(...COLOR_GOLD);
  doc.roundedRect(pageWidth - margin - 42, 32, 42, 7, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLOR_WHITE);
  doc.text('OFFICIAL SYLLABUS PDF', pageWidth - margin - 21, 36.5, { align: 'center' });

  y = 54;

  // ==========================================
  // 2. COURSE TITLE & SUBTITLE
  // ==========================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...COLOR_NAVY);
  
  const titleLines = doc.splitTextToSize(course.title, contentWidth);
  doc.text(titleLines, margin, y);
  y += (titleLines.length * 7) + 2;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...COLOR_TEAL);
  const subtitleLines = doc.splitTextToSize(course.subtitle, contentWidth);
  doc.text(subtitleLines, margin, y);
  y += (subtitleLines.length * 5) + 6;

  // ==========================================
  // 3. KEY HIGHLIGHTS METRICS STRIP
  // ==========================================
  doc.setFillColor(...COLOR_TEAL_LIGHT);
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'F');
  doc.setDrawColor(180, 220, 220);
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'S');

  const colW = contentWidth / 4;
  
  // Metric 1: Duration
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLOR_MUTED);
  doc.text('DURATION', margin + 6, y + 7);
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_NAVY);
  doc.text(course.duration || '8 Months', margin + 6, y + 15);

  // Metric 2: Avg Salary
  doc.setFontSize(7.5);
  doc.setTextColor(...COLOR_MUTED);
  doc.text('AVG SALARY', margin + colW + 4, y + 7);
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_NAVY);
  doc.text(course.avgSalary || '₹6.5 - 18 LPA', margin + colW + 4, y + 15);

  // Metric 3: Placement
  doc.setFontSize(7.5);
  doc.setTextColor(...COLOR_MUTED);
  doc.text('PLACEMENT ASSISTANCE', margin + (colW * 2) + 4, y + 7);
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_EMERALD);
  doc.text(course.jobGuarantee ? '100% Job Guarantee' : 'Dedicated Placement', margin + (colW * 2) + 4, y + 15);

  // Metric 4: Rating
  doc.setFontSize(7.5);
  doc.setTextColor(...COLOR_MUTED);
  doc.text('RATING & LEARNERS', margin + (colW * 3) + 4, y + 7);
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_NAVY);
  doc.text(`★ ${course.rating || '4.9'} (${course.reviewsCount || '1.2k+'} Reviews)`, margin + (colW * 3) + 4, y + 15);

  y += 30;

  // ==========================================
  // 4. COURSE OVERVIEW & DESCRIPTION
  // ==========================================
  checkPageOverflow(30);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...COLOR_NAVY);
  doc.text('Program Overview', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLOR_TEXT);
  const descText = `${course.description} This course is engineered according to current corporate hiring demands with 100% hands-on practical lab exercises, real-time industry projects, code reviews, and comprehensive interview preparation.`;
  const descLines = doc.splitTextToSize(descText, contentWidth);
  doc.text(descLines, margin, y);
  y += (descLines.length * 5) + 8;

  // ==========================================
  // 5. TECHNOLOGIES & TOOLS COVERED
  // ==========================================
  if (course.techBadges && course.techBadges.length > 0) {
    checkPageOverflow(25);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...COLOR_NAVY);
    doc.text('Technologies & Skill Stack', margin, y);
    y += 6;

    let badgeX = margin;
    let badgeY = y;

    course.techBadges.forEach((badge) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      const badgeWidth = doc.getTextWidth(badge) + 8;

      if (badgeX + badgeWidth > pageWidth - margin) {
        badgeX = margin;
        badgeY += 8;
      }

      doc.setFillColor(241, 245, 249); // slate 100
      doc.setDrawColor(203, 213, 225); // slate 300
      doc.roundedRect(badgeX, badgeY, badgeWidth, 6, 1.5, 1.5, 'FD');
      
      doc.setTextColor(...COLOR_TEAL);
      doc.text(badge, badgeX + 4, badgeY + 4.2);

      badgeX += badgeWidth + 3;
    });

    y = badgeY + 12;
  }

  // ==========================================
  // 6. CURRICULUM SYLLABUS MODULES
  // ==========================================
  checkPageOverflow(20);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLOR_NAVY);
  doc.text('Detailed Curriculum Syllabus', margin, y);
  
  doc.setFontSize(9);
  doc.setTextColor(...COLOR_TEAL);
  doc.text(`${course.syllabus?.length || 0} Comprehensive Modules`, pageWidth - margin, y, { align: 'right' });
  
  y += 8;

  if (course.syllabus && course.syllabus.length > 0) {
    course.syllabus.forEach((mod, idx) => {
      checkPageOverflow(22);

      // Module Box Header
      doc.setFillColor(...COLOR_TEAL);
      doc.roundedRect(margin, y, contentWidth, 7, 1.5, 1.5, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(...COLOR_WHITE);
      doc.text(`${mod.module.toUpperCase()}: ${mod.title}`, margin + 4, y + 4.8);

      y += 9;

      // Module Content Takeaways Box
      const bullets = [
        'In-depth conceptual framework and architecture fundamentals.',
        'Hands-on lab exercises and real-world project scenarios.',
        'Best practices, optimization techniques, and production readiness.',
        'Weekly technical assessment, code reviews, and mock interview questions.'
      ];

      doc.setFillColor(250, 250, 250);
      doc.setDrawColor(226, 232, 240);
      const boxHeight = (bullets.length * 4.5) + 4;
      doc.roundedRect(margin, y, contentWidth, boxHeight, 1.5, 1.5, 'FD');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...COLOR_TEXT);

      bullets.forEach((bullet, bIdx) => {
        doc.text(`•  ${bullet}`, margin + 5, y + 4.5 + (bIdx * 4.5));
      });

      y += boxHeight + 5;
    });
  }

  // ==========================================
  // 7. CAREER ROLES & HIRING ADVANTAGE
  // ==========================================
  checkPageOverflow(35);

  y += 4;
  doc.setFillColor(...COLOR_TEAL_LIGHT);
  doc.setDrawColor(180, 220, 220);
  doc.roundedRect(margin, y, contentWidth, 32, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLOR_TEAL);
  doc.text('Target Career Roles & Job Opportunities', margin + 6, y + 8);

  const roles = [
    '• Software Engineer / Specialist',
    '• Systems & Solutions Architect',
    '• Technical Consultant Lead',
    '• Quality & Test Analyst',
    '• Tech Project Manager',
    '• Enterprise Cloud Specialist'
  ];

  doc.setFont('helvetica', 'semibold');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLOR_NAVY);

  roles.forEach((role, rIdx) => {
    const rx = margin + 6 + (rIdx % 2 === 0 ? 0 : 90);
    const ry = y + 15 + (Math.floor(rIdx / 2) * 5.5);
    doc.text(role, rx, ry);
  });

  y += 40;

  // ==========================================
  // 8. CERTIFICATION & ENROLLMENT FOOTER
  // ==========================================
  checkPageOverflow(25);

  doc.setFillColor(...COLOR_NAVY);
  doc.roundedRect(margin, y, contentWidth, 24, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLOR_WHITE);
  doc.text('Ready to Elevate Your IT Career?', margin + 6, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225);
  doc.text('Enroll today to secure 100% placement support and 1-on-1 mentorship.', margin + 6, y + 16);

  doc.setFillColor(253, 238, 227); // Warm Peach
  doc.roundedRect(pageWidth - margin - 50, y + 6, 44, 12, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLOR_NAVY);
  doc.text('CALL: +91 76691 00251', pageWidth - margin - 28, y + 13.5, { align: 'center' });

  // Add Footers to all generated pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    addFooter(i, totalPages);
  }

  // Save PDF file named after the course title
  const safeFilename = `${course.title.replace(/[^a-zA-Z0-9]/g, '_')}_Syllabus.pdf`;
  doc.save(safeFilename);
}
