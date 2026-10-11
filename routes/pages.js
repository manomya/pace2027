const express = require('express');
const router = express.Router();
const path = require('path');
const conferenceData = require('../data/conferenceData');

// Helper to render view wrapped in layout
function renderWithLayout(req, res, viewName, pageTitle, extraData = {}) {
  const fullData = {
    ...conferenceData,
    ...extraData,
    title: pageTitle,
    currentPath: req.path
  };

  res.render(`pages/${viewName}`, fullData, (err, pageHtml) => {
    if (err) {
      console.error(`Error rendering page ${viewName}:`, err);
      return res.status(500).send('Internal Server Error');
    }
    res.render('layout', {
      ...fullData,
      body: pageHtml
    });
  });
}

// 1. Home
router.get('/', (req, res) => {
  renderWithLayout(req, res, 'home', 'Home');
});

// 2. About PACE-2027
router.get('/about', (req, res) => {
  renderWithLayout(req, res, 'about', 'About the Conference');
});

// 3. About Poornima University
router.get('/university', (req, res) => {
  renderWithLayout(req, res, 'university', 'About Poornima University');
});

// 4. Themes
router.get('/themes', (req, res) => {
  renderWithLayout(req, res, 'themes', 'Conference Themes & Tracks');
});

// 5. Organizing Committee
router.get('/committee', (req, res) => {
  renderWithLayout(req, res, 'committee', 'Organizing Committee');
});

// 6. International Advisory Committee
router.get('/intl-advisory', (req, res) => {
  renderWithLayout(req, res, 'intl-advisory', 'International Advisory Committee');
});

// 7. National Advisory Committee
router.get('/natl-advisory', (req, res) => {
  renderWithLayout(req, res, 'natl-advisory', 'National Advisory Committee');
});

// 8. Technical Committee
router.get('/technical', (req, res) => {
  renderWithLayout(req, res, 'technical', 'Technical Committee');
});

// 9. Local Organizing Committee
router.get('/local', (req, res) => {
  renderWithLayout(req, res, 'local', 'Local Organising Committee');
});

// 10. Call for Papers
router.get('/papers', (req, res) => {
  renderWithLayout(req, res, 'papers', 'Call for Papers & Author Guidelines');
});

// 11. Registration & Fees
router.get('/registration', (req, res) => {
  renderWithLayout(req, res, 'registration', 'Registration & Fees');
});

// 12. Sponsorship
router.get('/sponsorship', (req, res) => {
  renderWithLayout(req, res, 'sponsorship', 'Sponsorship Opportunities');
});

// 13. Venue
router.get('/venue', (req, res) => {
  renderWithLayout(req, res, 'venue', 'Conference Venue & How to Reach');
});

// 14. Explore Jaipur
router.get('/jaipur', (req, res) => {
  renderWithLayout(req, res, 'jaipur', 'Explore Jaipur');
});

// 15. Contact
router.get('/contact', (req, res) => {
  renderWithLayout(req, res, 'contact', 'Contact Us');
});

// 16. SPA Version (Hash router)
router.get('/spa', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/spa.html'));
});

module.exports = { router, renderWithLayout };
