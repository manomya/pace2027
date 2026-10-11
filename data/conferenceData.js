/**
 * Conference Data for PACE-2027
 * International Conference on Pioneering Advancements in Civil Engineering
 * Poornima University, Jaipur
 */

const THEMES = [
  {
    track: "TRACK 01",
    title: "Structural Engineering & Smart Infrastructure",
    topics: [
      "Advanced Composite Structures & Sustainable Foundations",
      "Performance-Based & Resilient Structural Design",
      "Structural Health Monitoring, NDT & Digital Twins"
    ]
  },
  {
    track: "TRACK 02",
    title: "Water Resources & Hydraulic Systems",
    topics: [
      "Hydrological Modeling, Flood Forecasting & Dam Safety",
      "Sustainable Rural Water Supply & Filtration",
      "Resilient Hydraulic Structures & Desalination"
    ]
  },
  {
    track: "TRACK 03",
    title: "Environmental Engineering & Circular Economy",
    topics: [
      "Environmental Monitoring, Remote Sensing & Pollution Control",
      "Construction & Demolition (C&D) Waste Utilization",
      "Circular Economy, Waste Valorization & Net-Zero Infrastructure"
    ]
  },
  {
    track: "TRACK 04",
    title: "Geotechnical Engineering & Ground Improvement",
    topics: [
      "Geotechnical Characterization, Soil Dynamics & Liquefaction",
      "Geohazards, Landslides & Geotechnical Resilience",
      "Sustainable Geo-Composites & Alternative Geomaterials"
    ]
  },
  {
    track: "TRACK 05",
    title: "Artificial Intelligence & Computational Civil Engineering",
    topics: [
      "GIS, Spatial Analytics & Geospatial Technologies",
      "Data-Driven Infrastructure Lifecycle Management",
      "Mobile Applications & Automated Engineering Tools"
    ]
  },
  {
    track: "TRACK 06",
    title: "Transportation Engineering & Urban Mobility",
    topics: [
      "Traffic Flow, Management & Intelligent Transportation Systems",
      "Smart Cities, Connected Mobility & Resilient Transport",
      "Sustainable Transportation, Pavement & Highway Engineering"
    ]
  }
];

const DATES = [
  { label: "Last Date of Abstract", date: "Sep. 15, 2026" },
  { label: "Last Date of Paper Submission", date: "Oct. 15, 2026" },
  { label: "Acceptance Notification", date: "Nov. 15, 2026" },
  { label: "Last Date of Registration", date: "Dec. 15, 2026" },
  { label: "Camera Ready Paper Submission", date: "Dec. 28, 2026" },
  { label: "Conference Dates", date: "Jan. 29 – 30, 2027", highlight: true }
];

const COMMITTEE = [
  {
    tier: "Patrons",
    members: [
      { name: "Sh. Shashikant Singhi", role: "Chairperson, Poornima University", image: "/images/committee/shashikant.jpg" },
      { name: "Ar. Rahul Singhi", role: "Director, Poornima University", image: "/images/committee/rahul.jpg" }
    ]
  },
  {
    tier: "Chief Patrons",
    members: [
      { name: "Dr. Suresh Chandra Padhy", role: "President, Poornima University", image: "/images/committee/padhy.jpg" },
      { name: "Dr. Manoj Gupta", role: "Pro-President, FCE & FET, Poornima University", image: "/images/committee/manoj.jpg" }
    ]
  },
  {
    tier: "Advisor",
    members: [
      { name: "Dr. Sunil Kr. Gupta", role: "Dean (R&D), Poornima University", image: "/images/committee/sunil.jpg" }
    ]
  },
  {
    tier: "Conference Chair & Co-Chair",
    members: [
      { name: "Dr. Prannath Dadhich", role: "HoD, Civil, Poornima University", image: "/images/committee/prannath.jpg" },
      { name: "Dr. Deepak Kumar Prajapat", role: "Associate Professor, Civil, Poornima University", image: "/images/committee/deepak.jpg" }
    ]
  },
  {
    tier: "Convenors",
    members: [
      { name: "Dr. Vedatrayee Acharya", role: "Associate Professor, Civil, Poornima University", image: "/images/committee/veda.jpg" },
      { name: "Dr. Ashish Solanki", role: "Associate Professor, Civil, Poornima University", image: "/images/committee/ashish.jpg" }
    ]
  },
  {
    tier: "Co-Convenors",
    members: [
      { name: "Dr. Rohit Vyas", role: "Assistant Professor, Civil, Poornima University", image: "/images/committee/rohit.jpg" },
      { name: "Mr. Ajay Singh Thakur", role: "Assistant Professor, Civil, Poornima University", image: "/images/committee/ajay.jpg" }
    ]
  }
];

const LOCAL = [
  { name: "Dr. Devendra Somwanshi", role: "Registrar, PU" },
  { name: "Mr. Ashwini Lata", role: "Director (Administration), PU" },
  { name: "Dr. Meenakshi Malav", role: "Director (Admission), PU" },
  { name: "Dr. Naval Kishore Jain", role: "COE, PU" },
  { name: "Dr. Rakesh Kumar Gupta", role: "Dean Student Welfare, PU" },
  { name: "Dr. Swati Gokhru", role: "Dean IR, PU" },
  { name: "Dr. Mayank Sharma", role: "Associate Dean, IQAC, PU" },
  { name: "Dr. Udit Mamodiya", role: "Associate Dean (R&D), PU" },
  { name: "Ms. Poonam Sharma", role: "CF&AO, PU" },
  { name: "Ms. Neema Shukla", role: "Chief Librarian, PU" },
  { name: "Dr. Ekata Sharma", role: "HOD, EEE, PU" },
  { name: "Dr. Mukesh Didwania", role: "HOD, ME, PU" },
  { name: "Dr. Ankita Dadhich", role: "Professor, CV, PU" },
  { name: "Dr. Akash Gehlot", role: "Associate Professor, CV, PU" },
  { name: "Dr. Rakesh Choudhary", role: "Assistant Professor, CV, PU" },
  { name: "Dr. Swati", role: "Assistant Professor, CV, PU" },
  { name: "Mr. Mansingh Rathore", role: "Assistant Professor, CV, PU" },
  { name: "Ms. Khushboo Tak", role: "Assistant Professor, CV, PU" }
];

const SIGHTS = [
  {
    image: "/images/sights/albert-hall.jpg",
    name: "Albert Hall Museum",
    desc: "Indo-Saracenic landmark and Rajasthan's oldest museum"
  },
  {
    image: "/images/sights/city-palace.jpg",
    name: "City Palace",
    desc: "Rajput, Mughal and European architecture in one courtyard"
  },
  {
    image: "/images/sights/hawa-mahal.jpg",
    name: "Hawa Mahal",
    desc: "Five-storey latticed façade engineered for natural ventilation"
  },
  {
    image: "/images/sights/jal-mahal.jpg",
    name: "Jal Mahal",
    desc: "Water palace rising from Man Sagar Lake"
  },
  {
    image: "/images/sights/nahargarh.jpg",
    name: "Nahargarh Fort",
    desc: "Aravalli hilltop fort overlooking the walled city"
  },
  {
    image: "/images/sights/amber-palace.jpg",
    name: "Amber Palace",
    desc: "Hilltop Rajput capital with historic water-harvesting works"
  },
  {
    image: "/images/sights/jantar-mantar.jpg",
    name: "Jantar Mantar",
    desc: "UNESCO-listed observatory with the world's largest stone sundial"
  },
  {
    image: "/images/sights/jaigarh.jpg",
    name: "Jaigarh Fort",
    desc: "Home to Jaivana, once the world's largest wheeled cannon"
  }
];

const SPONSOR_ROWS = [
  ["Sponsorship Amount", "₹2,00,000", "₹1,00,000", "₹50,000", "₹30,000"],
  ["Brochure Advertisement / Insertion", "✓", "✓", "✓", "—"],
  ["Brochure Insertion in Registration Kit", "✓", "✓", "—", "—"],
  ["Complimentary Registrations", "8", "5", "3", "2"],
  ["Exhibition Stall", "With LED Screen", "With LED Screen", "Without LED Screen", "Without LED Screen"],
  ["Presentation Slot", "✓", "✓", "—", "—"],
  ["Banner & Hoardings at Key Locations", "All 3 Locations", "2 Locations", "1 Location", "—"],
  ["Logo Display on Website & Conference Materials", "✓", "✓", "✓", "✓"],
  ["Logo on Registration Kit", "✓", "✓", "✓", "—"],
  ["Special Acknowledgement – Inauguration", "✓", "✓", "✓", "—"],
  ["Special Acknowledgement – Valedictory", "✓", "✓", "✓", "—"]
];

const PU_AWARDS = [
  "Recognised by the Indian Army to sponsor their officers for post-graduation courses during study leave.",
  "MoU signed with the Military College of Electrical & Mechanical Engineering (MCEME), Secunderabad, for academic collaboration and research.",
  "Rated 'Diamond' category in the overall rating for Indian colleges and universities by QS I-Gauge.",
  "Ranked among the top 63 private universities in the country (IIRF Best University Rankings 2022).",
  "Faculty of Management & Commerce rated in AA category among all B-Schools of the country (CAREERS360, 2022).",
  "Faculty of Management & Commerce ranked among the top 23 private university B-Schools in the country (Times B-School Ranking, April 2022).",
  "Faculty of Management & Commerce ranked among the top 66 B-Schools for return on investment (Business Today, 14 Nov 2021).",
  "Faculty of Engineering & Technology ranked among the top 18 best private engineering institutes in the North Zone (Times Engineering Ranking, 29 Jun 2021).",
  "Ranked among the top 47 private universities of the country (India Today, Aug 2020).",
  "Faculty of Computer Science & Engineering ranked among the top 63 BCA colleges in the country (India Today, Jul/Aug 2020).",
  "Faculty of Planning & Architecture ranked among the Top 7 private institutes of planning & architecture in India (Outlook, 17 Jun 2019)."
];

const PARTNERS = {
  industry: [
    { name: "H.G. Infra Engineering Ltd", image: "/images/partners/hg-infra.png" },
    { name: "UltraTech Cement", image: "/images/partners/ultratech.png" }
  ],
  excellence: [
    { name: "Centre of Excellence in Water & Clean Air, Poornima University", image: "/images/partners/coe-water.png" }
  ],
  technical: [
    { name: "Indian Green Building Council", image: "/images/partners/igbc.png" },
    { name: "Indian Concrete Institute", image: "/images/partners/ici.png" }
  ]
};

const FEES = {
  national: [
    { category: "UG / PG Students", regular: "₹1,500", late: "₹2,000" },
    { category: "Research Scholars / Academicians", regular: "₹2,000", late: "₹2,500" },
    { category: "Industry Delegates", regular: "₹2,500", late: "₹3,000" }
  ],
  international: [
    { category: "UG / PG Students", regular: "$ 100", late: "$ 150" },
    { category: "Research Scholars / Academicians", regular: "$ 150", late: "$ 200" },
    { category: "Industry Delegates", regular: "$ 200", late: "$ 250" }
  ]
};

const BANK_DETAILS = {
  accountNo: "50200067803850",
  branch: "Sitapura Industrial Area, Jaipur – 302022, Rajasthan, India",
  ifsc: "HDFC0003873",
  swift: "HDFCINBBXXX",
  accountType: "Current Account",
  bankCode: "3873"
};

const CONTACT_INFO = {
  convenors: [
    {
      role: "Convenor",
      name: "Dr. Vedatrayee Acharya",
      dept: "Convenor, PACE-2027\nDepartment of Civil Engineering",
      phone: "+91-8617336212"
    },
    {
      role: "Convenor",
      name: "Dr. Ashish Solanki",
      dept: "Convenor, PACE-2027\nDepartment of Civil Engineering",
      phone: "+91-7014683230"
    }
  ],
  secretariat: {
    title: "PACE-2027 Secretariat",
    address: "Department of Civil Engineering, Poornima University, Jaipur, Rajasthan, India",
    email: "PACE2027@poornima.edu.in",
    website: "https://www.poornima.edu.in/sub/PACE"
  },
  venue: {
    institution: "Poornima University",
    address: "IS-2027-31, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur, Rajasthan – 303905, India."
  }
};

module.exports = {
  THEMES,
  DATES,
  COMMITTEE,
  LOCAL,
  SIGHTS,
  SPONSOR_ROWS,
  PU_AWARDS,
  PARTNERS,
  FEES,
  BANK_DETAILS,
  CONTACT_INFO,

  // Lowercase aliases for EJS templates
  themes: THEMES,
  dates: DATES,
  committee: COMMITTEE,
  local: LOCAL,
  sights: SIGHTS,
  sponsors: SPONSOR_ROWS,
  awards: PU_AWARDS,
  partners: PARTNERS,
  fees: FEES,
  bank: BANK_DETAILS,
  contact: CONTACT_INFO
};
