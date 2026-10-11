const express = require('express');
const router = express.Router();
const conferenceData = require('../data/conferenceData');

// 1. Full conference metadata
router.get('/conference', (req, res) => {
  res.json({
    name: "PACE-2027",
    fullName: "International Conference on Pioneering Advancements in Civil Engineering",
    dates: "29–30 January 2027",
    location: "Poornima University, Jaipur, Rajasthan, India",
    email: "PACE2027@poornima.edu.in",
    website: "https://www.poornima.edu.in/sub/PACE",
    importantDates: conferenceData.DATES,
    themes: conferenceData.THEMES,
    partners: conferenceData.PARTNERS,
    fees: conferenceData.FEES,
    bankDetails: conferenceData.BANK_DETAILS
  });
});

// 2. Themes and Tracks
router.get('/themes', (req, res) => {
  res.json({
    totalTracks: conferenceData.THEMES.length,
    tracks: conferenceData.THEMES
  });
});

// 3. Important Deadlines
router.get('/dates', (req, res) => {
  res.json({
    dates: conferenceData.DATES
  });
});

// 4. Committees
router.get('/committees', (req, res) => {
  res.json({
    organizingCommittee: conferenceData.COMMITTEE,
    localOrganizingCommittee: conferenceData.LOCAL
  });
});

// 5. Jaipur Sightseeing
router.get('/sights', (req, res) => {
  res.json({
    city: "Jaipur",
    sights: conferenceData.SIGHTS
  });
});

// 6. Registration Fees & Remittance Details
router.get('/fees', (req, res) => {
  res.json({
    fees: conferenceData.FEES,
    bankDetails: conferenceData.BANK_DETAILS
  });
});

// 7. Contact Form Submission API
const contactSubmissions = [];

router.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required fields.'
    });
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  const submission = {
    id: 'INQ-' + Date.now(),
    name: name.trim(),
    email: email.trim(),
    phone: (phone || '').trim(),
    subject: subject || 'General Query',
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  contactSubmissions.push(submission);
  console.log(`[PACE-2027 Contact Inquiry] Received #${submission.id} from ${submission.name} <${submission.email}>: "${submission.subject}"`);

  res.status(200).json({
    success: true,
    message: 'Your message has been received by the PACE-2027 Secretariat. We will respond shortly to ' + submission.email,
    inquiryId: submission.id
  });
});

// 8. Paper Submission Intent API
const paperIntents = [];

router.post('/register-interest', (req, res) => {
  const { name, email, phone, institution, track, paperTitle, abstract } = req.body;

  if (!name || !email || !institution || !track || !paperTitle) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields (Name, Email, Institution, Track, Paper Title).'
    });
  }

  const submission = {
    id: 'PAP-' + Date.now(),
    name: name.trim(),
    email: email.trim(),
    phone: (phone || '').trim(),
    institution: institution.trim(),
    track: track.trim(),
    paperTitle: paperTitle.trim(),
    abstract: (abstract || '').trim(),
    createdAt: new Date().toISOString()
  };

  paperIntents.push(submission);
  console.log(`[PACE-2027 Paper Submission Intent] #${submission.id} "${submission.paperTitle}" by ${submission.name} (${submission.institution})`);

  res.status(200).json({
    success: true,
    message: `Paper registration intent submitted successfully! Reference ID: ${submission.id}. Submission template has been logged for ${submission.email}.`,
    submissionId: submission.id
  });
});

// 8. Developer Tools Status (Agentation & Ponytail)
router.get('/dev-tools', (req, res) => {
  const rootPkg = require('../package.json');
  res.json({
    agentation: {
      status: 'active',
      version: rootPkg.devDependencies.agentation || '3.1.2',
      clientScript: '/js/agentation.bundle.js'
    },
    ponytail: {
      status: 'active',
      version: rootPkg.dependencies.ponytail || '1.0.57'
    }
  });
});

module.exports = router;
