export const personalInfo = {
  name: 'Md. Zohurul Islam',
  avatar: '/images/zohurul.jpg',
  title: 'Computer Science & Engineering Researcher',
  university: 'Pabna University of Science and Technology',
  location: 'Pabna-6600, Bangladesh',
  phone: '+8801796092521',
  emails: ['mdzohu@gmail.com', 'zohurul.210115@s.pust.ac.bd'],
  bio: [
    "My name is Md. Zohurul Islam, and I am a Computer Science and Engineering graduate from Pabna University of Science and Technology, Bangladesh, under the supervision of Associate Professor Dr. Md. Toukir Ahmed, PhD (UIUC, USA). My areas of interest are Artificial Intelligence, Machine Learning, Hyperspectral Imaging, Image Reconstruction, and Spectroscopy.",
    "I developed a strong interest in research during the final year of my undergraduate studies, when I began exploring AI-driven solutions to real-world problems in imaging and intelligent systems. Since then, I have explored how modern AI and machine learning techniques can be applied to image processing, intelligent systems, and the analysis of complex datasets to extract meaningful patterns and insights. These experiences have strengthened my interest in research and motivated me to further develop my expertise in intelligent systems and AI-driven imaging. My goal is to continue advancing as a researcher and contribute to the development of innovative AI-based solutions for real-world challenges.",
  ],
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Hyperspectral Imaging',
    'Image Reconstruction',
    'Spectroscopy',
  ],
};

export type EducationItem = {
  degree: string;
  status?: string;
  institution: string;
  location: string;
  gpa: string;
  gpaScale: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    status: 'Ongoing',
    institution: 'Pabna University of Science and Technology',
    location: 'Pabna, Bangladesh',
    gpa: '3.51',
    gpaScale: '4.00',
    period: '4th Year, 1st Semester',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Govt. Shaheed Bulbul College',
    location: 'Pabna, Bangladesh',
    gpa: '5.00',
    gpaScale: '5.00',
    period: 'HSC',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Pabna Zilla School',
    location: 'Pabna, Bangladesh',
    gpa: '4.94',
    gpaScale: '5.00',
    period: 'SSC',
  },
];

export type ExperienceItem = {
  role: string;
  department: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Research Assistant',
    department: 'Department of Computer Science and Engineering',
    organization: 'Pabna University of Science and Technology',
    location: 'Pabna-6600, Bangladesh',
    period: 'January 2026 - Present',
    current: true,
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  year: string;
};

export const projects: ProjectItem[] = [
  {
    title: 'Notebook Application',
    description: 'A feature-rich notebook application developed using Java and Android Studio, enabling users to create, edit, and manage notes efficiently on Android devices.',
    tech: ['Java', 'Android Studio'],
    year: '2024',
  },
  {
    title: 'ATM Machine Software',
    description: 'A simulation of ATM machine functionality developed using C++ and iGraphics, featuring authentication, balance inquiry, cash withdrawal, and deposit operations with a graphical interface.',
    tech: ['C++', 'iGraphics'],
    year: '2023',
  },
];

export type PublicationItem = {
  title: string;
  authors: string;
  journal: string;
  metrics: string;
  year: string;
  link: string;
};

export const publications: PublicationItem[] = [
  {
    title: 'Comparative Analysis of Explainable Machine Learning Integrated with Hyperspectral Imaging for Early Prediction of Wheat Yield',
    authors: 'Md. Zohurul Islam, Most. Mira Khatun, Md Sadiul Alam Chyon, Rashid Anzoom, Md Niaz Imtiaz, SM Hasan Sazzad Iqbal, Md Shafiul Azam, Md Abdur Rahim, Md Wadud Ahmed, & Md. Toukir Ahmed',
    journal: 'Talanta (Elsevier)',
    metrics: 'Q1 · IF: 6.1',
    year: '2026',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0039914026006119?via%3Dihub',
  },
  {
    title: 'Explainable AI-Guided Hyperspectral Feature Selection in Fruit Quality Assessment and Spatial Visualization',
    authors: 'Most. Mira Khatun, Md. Zohurul Islam, Md. Niaz Imtiaz, Md Wadud Ahmed, & Md. Toukir Ahmed',
    journal: 'Journal of Food Science (Wiley)',
    metrics: 'Q1 · IF: 3.4',
    year: '2026',
    link: 'https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.70976',
  },
];

export type AwardItem = {
  title: string;
  event: string;
  date: string;
  image?: string;
  images?: string[];
  description?: string;
};

export const awards: AwardItem[] = [
  {
    title: '4th Runner-Up',
    event: 'Intra University Programming Contest 2.0 (CSE, PUST)',
    date: 'August 2023',
    image: 'images/1.jpg',
    images: ['images/1.jpg', 'images/1 .jpeg'],
  },
  {
    title: '6th Runner-Up',
    event: 'Intra University Programming Contest 1.0 (CSE, PUST)',
    date: 'June 2023',
    image: 'images/2.jpg',
    images: ['images/2.jpg', 'images/2 .jpg'],
  },
  {
    title: 'Volunteer',
    event: 'International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII 2026)',
    date: 'June 17–18, 2026',
    image: 'images/3.jpeg',
    images: ['images/3.jpeg', 'images/3 .jpeg'],
  },
  {
    title: 'Honorable Mention',
    event: 'International Collegiate Programming Contest (ICPC)',
    date: 'October 3–November 9, 2024',
    image: 'images/4.png',
    images: ['images/4.png'],
  },
  {
    title: 'Effective Data Sharing for Sustainable Development',
    event: 'United Nations System Staff College (UNSSC)',
    date: 'September 14, 2026',
    image: 'images/5.png',
    images: ['images/5.png'],
  },
  {
    title: 'Mobile App Development Training',
    event: 'Android, Flutter & iOS',
    date: 'August 31, 2025',
    image: 'images/6.png',
    images: ['images/6.png'],
  },
  {
    title: 'Programming Competition',
    event: 'IEEE PUST Student Branch',
    date: 'October 27, 2024',
    image: 'images/7.jpeg',
    images: ['images/7.jpeg'],
  },
  {
    title: 'English Spoken Course',
    event: 'Certificate of Completion',
    date: 'July 15, 2018',
    image: 'images/8.jpeg',
    images: ['images/8.jpeg'],
  },
];


export const socialLinks = [
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=SXeNViUAAAAJ&hl=en', icon: 'graduation' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Md-Zohurul-Islam-2?ev=hdr_xprf', icon: 'research' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/md-zohurul-islam-a80673292/', icon: 'linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/ZOHURUL.CSE.PUST/', icon: 'facebook' },
  { name: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0009-0008-7113-6788', icon: 'orcid' },
  { name: 'Web of Science', url: 'https://www.webofscience.com/wos/author/record/PQV-7917-2026', icon: 'webofscience' },
  { name: 'Email', url: 'mailto:mdzohu@gmail.com', icon: 'email' },
];
