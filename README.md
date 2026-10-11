# PACE-2027: International Conference on Pioneering Advancements in Civil Engineering

> **Host Institution:** Department of Civil Engineering, Poornima University, Jaipur, Rajasthan, India  
> **Conference Dates:** 29–30 January 2027  
> **Official Email:** [PACE2027@poornima.edu.in](mailto:PACE2027@poornima.edu.in)  
> **Conference Portal:** [poornima.edu.in/sub/PACE](https://www.poornima.edu.in/sub/PACE)

---

## 🌟 Overview & Conversion Highlights

This project is a modern, modular **Node.js & Express.js** web application converted from the standalone `pace2027-website.html` file.

### Key Improvements Made During Conversion:
1. **Separation of Concerns & Clean Architecture:**
   - Separated HTML, CSS, JavaScript, and static binary assets into standard production-grade directories (`public/`, `views/`, `routes/`, `data/`).
2. **Asset Optimization (98% Payload Reduction):**
   - Extracted **28 embedded base64 images** (hero, logos, committee photos, Jaipur sights, partner badges) into optimized `.jpg` and `.png` files under `/public/images/`.
   - Replaced a 237 KB inline `<style>` block with a clean, cached stylesheet at `/public/css/style.css` (~15 KB).
   - Reduced initial HTML payload from **1.57 MB** down to **~12 KB** with HTTP caching (`Cache-Control: 1 day`).
3. **Server-Side Rendering (SSR) with EJS:**
   - Multi-page application with SEO-friendly clean URLs (`/`, `/about`, `/themes`, `/committee`, `/papers`, etc.).
   - Master layout (`views/layout.ejs`) with reusable partials (`topbar`, `masthead`, `nav`, `footer`, `dates`, `partners`, `countdown`).
4. **RESTful JSON API:**
   - Structured JSON API endpoints for conference data, themes, important deadlines, committees, and fees (`/api/conference`, `/api/themes`, etc.).
5. **Interactive Forms:**
   - Added interactive **Online Contact & Inquiry Form** on `/contact` with backend validation (`POST /api/contact`).
   - Added **Paper Submission Intent Form** on `/papers` with reference ID generation (`POST /api/register-interest`).
6. **Scroll-Driven Brick Wall Sponsor Reveal (GSAP & ScrollTrigger):**
   - Realistic terracotta and red-clay running-bond masonry wall in front of the sponsor section.
   - Pinned viewport scrub: scrolling dismantles the wall brick by brick from the center outwards.
   - Bricks dislodge with organic 3D rotation, depth, mortar dust particle physics, and outer framing pillars.
   - Smooth bidirectional scrub: reverses cleanly when scrolling upward.
   - Fully accessible, reduced-motion friendly (`prefers-reduced-motion`), and responsive across desktop, tablet, and mobile.
7. **Live Interactive Countdown & Mobile Responsive UI:**
   - Real-time countdown clock ticking down to **29 January 2027, 09:00 IST**.
   - Mobile responsive navigation drawer with burger toggle button.
8. **Client-side SPA Compatibility:**
   - An optimized client-side SPA version is also available at `/spa` or `/spa.html`.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** v18+ (tested on Node.js v24.18.0)
- **npm** v9+ (tested on npm 11.16.0)

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 3. Running the Server
To start the production server:
```bash
npm start
```

To run in development mode with automatic reload on changes:
```bash
npm run dev
```

Open your browser and visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Project Structure

```text
PACE 2027/
├── server.js               # Main Express.js server entry point
├── package.json            # Project dependencies & scripts
├── .env.example            # Environment variables example
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
│
├── data/
│   └── conferenceData.js   # Centralized conference metadata, themes, dates, committees
│
├── routes/
│   ├── pages.js            # Server-rendered web page routes (SSR)
│   └── api.js              # RESTful API endpoints & form handlers
│
├── views/
│   ├── layout.ejs          # Master layout template (head, nav, footer, scripts)
│   ├── partials/           # Reusable EJS components
│   │   ├── topbar.ejs      # Top bar with dates and contact email
│   │   ├── masthead.ejs    # University logo & conference branding
│   │   ├── nav.ejs         # Responsive navigation bar & dropdowns
│   │   ├── footer.ejs      # 4-column footer with quick links & copyright
│   │   ├── dates.ejs       # Important dates timeline
│   │   ├── partners.ejs    # Industry & Technical partner logos
│   │   └── countdown.ejs   # Live countdown component
│   └── pages/              # Individual page templates
│       ├── home.ejs        # Homepage with hero, tracks, deadlines
│       ├── about.ejs       # About PACE-2027 & publication details
│       ├── university.ejs  # About Poornima University, rankings & awards
│       ├── themes.ejs      # 6 technical tracks & research areas
│       ├── committee.ejs   # Organizing committee & patrons
│       ├── intl-advisory.ejs # International advisory committee
│       ├── natl-advisory.ejs # National advisory committee
│       ├── technical.ejs   # Technical committee
│       ├── local.ejs       # Local organizing committee members
│       ├── papers.ejs      # Author guidelines & paper submission form
│       ├── registration.ejs# Registration fee matrix & bank details
│       ├── sponsorship.ejs # Sponsorship tiers & benefits matrix
│       ├── venue.ejs       # Campus location, transport & travel info
│       ├── jaipur.ejs      # Explore Jaipur heritage sights gallery
│       ├── contact.ejs     # Convenor contacts & inquiry form
│       └── 404.ejs         # Custom 404 error page
│
└── public/                 # Static assets served by Express
    ├── css/
    │   └── style.css       # Full conference stylesheet
    ├── js/
    │   └── main.js         # Countdown, mobile menu & AJAX form handlers
    ├── images/             # Extracted image assets
    │   ├── hero-bg.jpg     # Campus hero background
    │   ├── venue.jpg       # Academic block photograph
    │   ├── poornima-logo.png # Poornima University logo
    │   ├── committee/      # Committee headshot photos (11 images)
    │   ├── sights/         # Jaipur sightseeing photos (8 images)
    │   └── partners/       # Partner & sponsor logos (6 logos)
    └── spa.html            # Optimized static SPA version (hash-router)
```

---

## 🌐 Web Routes

| URL Route | Description |
|---|---|
| `/` | Conference Homepage (Hero, Deadlines, Tracks, Countdown) |
| `/about` | About PACE-2027 & Scopus/WoS publication details |
| `/university` | About Poornima University, rankings & awards |
| `/themes` | Six technical tracks & sub-disciplines |
| `/committee` | Organizing Committee (Patrons, Chairs, Convenors) |
| `/intl-advisory` | International Advisory Committee |
| `/natl-advisory` | National Advisory Committee |
| `/technical` | Technical Committee |
| `/local` | Local Organising Committee (Faculty & Officers) |
| `/papers` | Call for Papers, Author Guidelines & Intent Submission |
| `/registration` | Registration Fee Matrix & Bank Remittance Details |
| `/sponsorship` | Sponsorship Packages (Platinum, Diamond, Gold, Silver) |
| `/venue` | Venue info, campus photo & how to reach by air/train/road |
| `/jaipur` | Explore Jaipur's architectural heritage sights |
| `/contact` | Convenor contact info & Online Inquiry Form |
| `/spa` | Client-side SPA version (hash navigation) |

---

## ⚡ REST API Endpoints

### 1. `GET /api/conference`
Returns full conference metadata, important deadlines, themes, partners, and bank remittance details in JSON.

### 2. `GET /api/themes`
Returns all 6 conference tracks and associated sub-topics.

### 3. `GET /api/dates`
Returns all conference milestones and deadlines.

### 4. `GET /api/committees`
Returns the complete list of organizing and local committee members.

### 5. `GET /api/fees`
Returns national and international delegate registration fee tiers.

### 6. `GET /api/sights`
Returns Jaipur sightseeing destinations and descriptions.

### 7. `POST /api/contact`
Accepts a JSON payload to submit an inquiry:
```json
{
  "name": "Dr. Ramesh Kumar",
  "email": "ramesh@example.com",
  "phone": "+91 9876543210",
  "subject": "Paper Submission",
  "message": "Question regarding similarity score requirements."
}
```

### 8. `POST /api/register-interest`
Accepts a JSON payload to submit paper intent:
```json
{
  "name": "Prof. Anita Sharma",
  "email": "anita@nit.ac.in",
  "phone": "+91 9876543211",
  "institution": "NIT Jaipur",
  "track": "TRACK 01: Structural Engineering & Smart Infrastructure",
  "paperTitle": "Seismic Resilience of Concrete Bridges",
  "abstract": "Summary of research..."
}
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (refer to `.env.example`):
```ini
PORT=3000
NODE_ENV=development
```

---

## 📄 License
© 2026–2027 Poornima University, Jaipur. All rights reserved.
