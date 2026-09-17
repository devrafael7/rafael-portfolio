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
];

const words = [
  { text: "Data", imgPath: "/images/data.svg" },
  { text: "Complexity", imgPath: "/images/complexity.svg" },
  { text: "Information", imgPath: "/images/info.svg" },
  { text: "Data Stream", imgPath: "/images/datastream.svg" },
  { text: "API", imgPath: "/images/api.svg" },
  { text: "Files", imgPath: "/images/files.svg" },
];

const counterItems = [
  { value: 2.5, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 10, suffix: "+", label: "Data Engineering & Analytics Projects" },
  { value: 3, suffix: "+", label: "Cloud & Data Platforms" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",

  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
     className: "scale-175 px-4",
  },
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
];

const abilities = [
  {
    imgPath: "/images/badge.png",
    title: "Data Quality",
    desc: "Building reliable, validated data pipelines that ensure consistency and trust.",
  },
  {
    imgPath: "/images/data-server.png",
    title: "Scalable Pipelines",
    desc: "Designing cloud-native ETL/ELT workflows that grow with business needs.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review: "Rafael is an excellent student, he gets good grades, is creative, and stood out in the class for pursuing a career in data.",
    imgPath: "/images/aedb_logo.png",
    logoPath: "/images/logos/aedb.png",
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

    imgPath: "/images/michelin.png",
    logoPath: "/images/michelin-logo.png",
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

    imgPath: "/images/vwtb.png",
    logoPath: "/images/vwtb-logo.png",
    imgClass: "scale-90 -my-16",
    logoClass: "scale-230 mt-2",

    title: "Data Analytics & Data Science Intern",
    date: "february 2026 - The moment",

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
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

export const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github (4).png",
    url: "https://github.com/devrafael7",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
  testimonials,
  navLinks,
};
