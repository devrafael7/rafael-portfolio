const BASE_URL = import.meta.env.BASE_URL;

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects"
  },
];

const words = [
  { text: "Data", imgPath: `${BASE_URL}images/data.svg` },
  { text: "Complexity", imgPath: `${BASE_URL}images/complexity.svg` },
  { text: "Information", imgPath: `${BASE_URL}images/info.svg` },
  { text: "Data Stream", imgPath: `${BASE_URL}images/datastream.svg` },
  { text: "API", imgPath: `${BASE_URL}images/api.svg` },
  { text: "Files", imgPath: `${BASE_URL}images/files.svg` },
];

const counterItems = [
  { value: 2.5, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 10, suffix: "+", label: "Data Engineering & Analytics Projects" },
  { value: 3, suffix: "+", label: "Cloud & Data Platforms" },
];

const logoIconsList = [
  {
    imgPath: `${BASE_URL}images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-7.png`,
    className: "scale-175 px-4",
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${BASE_URL}images/logos/company-logo-3.png`,
  },
];

const abilities = [
  {
    imgPath: `${BASE_URL}images/badge.png`,
    title: "Data Quality",
    desc: "Building reliable, validated data pipelines that ensure consistency and trust.",
  },
  {
    imgPath: `${BASE_URL}images/data-server.png`,
    title: "Scalable Pipelines",
    desc: "Designing cloud-native ETL/ELT workflows that grow with business needs.",
  },
  {
    imgPath: `${BASE_URL}images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review:
      "Rafael is an excellent student, he gets good grades, is creative, and stood out in the class for pursuing a career in data.",
    imgPath: `${BASE_URL}images/aedb_logo.png`,
    logoPath: `${BASE_URL}images/logos/aedb.png`,
    imgClass: "scale-100",
    logoClass: "scale-190 mt-3",
    title: "Software Engineering Degree",
    date: "January 2024 - December 2027",
    responsibilities: [
      "Developed applications with C# and Python while applying software engineering best practices and design patterns.",
      "Studied relational databases, SQL, cloud computing, data modeling, and distributed systems.",
      "Built a foundation in machine learning, data engineering, ETL pipelines, and analytics through academic projects.",
    ],
  },

  {
    review:
      "Rafael quickly became a valuable member of the team. His dedication to building reliable ETL pipelines and delivering data-driven solutions significantly improved our analytics workflows and reporting processes.",
    imgPath: `${BASE_URL}images/michelin.png`,
    logoPath: `${BASE_URL}images/michelin-logo.png`,
    imgClass: "scale-60 -my-8",
    logoClass: "scale-65",
    title: "Data Analytics & ETL Pipelines Intern",
    date: "September 2024 - February 2026",
    responsibilities: [
      "Developed and maintained ETL pipelines using Python and SQL to automate data ingestion from multiple business systems.",
      "Designed analytical datasets and dashboards by transforming raw data into clean, business-ready information.",
      "Collaborated with data engineers and business stakeholders to improve data quality, optimize SQL queries, and support decision-making.",
    ],
  },

  {
    review:
      "Rafael demonstrated exceptional analytical thinking and curiosity throughout his internship. His contributions to data analytics and machine learning initiatives helped the team uncover valuable insights and improve data-driven decision-making.",
    imgPath: `${BASE_URL}images/vwtb.png`,
    logoPath: `${BASE_URL}images/vwtb-logo.png`,
    imgClass: "scale-90 -my-16",
    logoClass: "scale-230 mt-2",
    title: "Data Analytics & Data Science Intern",
    date: "February 2026 - Present",
    responsibilities: [
      "Performed exploratory data analysis (EDA) and developed interactive dashboards to monitor business and operational KPIs.",
      "Built predictive machine learning models using Python, improving forecasting accuracy and supporting strategic decisions.",
      "Collaborated with cross-functional teams to clean, validate, and analyze large datasets while documenting findings and presenting actionable insights.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${BASE_URL}images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${BASE_URL}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${BASE_URL}images/logo3.png`,
  },
];

export const socialImgs = [
  {
    name: "github",
    imgPath: `${BASE_URL}images/github (4).png`,
    url: "https://github.com/devrafael7",
  },
  {
    name: "linkedin",
    imgPath: `${BASE_URL}images/linkedin.png`,
    url: "https://www.linkedin.com/in/rafael-oliveira-4013b4300/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  navLinks,
};

