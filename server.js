/**
 * PACE-2027 Conference Web Application
 * Express.js Server
 * Poornima University, Jaipur
 */

const express = require('express');
const path = require('path');
const cors = require('cors');

const { router: pageRoutes, renderWithLayout } = require('./routes/pages');
const apiRoutes = require('./routes/api');
const ponytail = require('ponytail');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve Static Assets from /public (no-cache for development so changes reflect instantly)
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 0,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

// Request Logger in dev
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (!req.path.startsWith('/images') && !req.path.startsWith('/css') && !req.path.startsWith('/js')) {
      console.log(`[${req.method}] ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// Mount Routes
app.use('/', pageRoutes);
app.use('/api', apiRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404);
  renderWithLayout(req, res, '404', 'Page Not Found');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Internal Error]:', err.stack);
  res.status(500).send(`
    <html>
      <body style="font-family:sans-serif;padding:50px;text-align:center;">
        <h1 style="color:#5E0F1E;">500 - Internal Server Error</h1>
        <p>Something went wrong on the server.</p>
        <a href="/" style="color:#A47F14;text-decoration:none;">Return to Homepage</a>
      </body>
    </html>
  `);
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`  PACE-2027 Conference Server is running!`);
    console.log(`  Website: http://localhost:${PORT}`);
    console.log(`  API:     http://localhost:${PORT}/api/conference`);
    console.log(`  Port:    ${PORT}`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
