// SOURCE OF TRUTH: migrated exactly from my-portfolio-main/index.html
// Do not invent content here — only restructure existing content.

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Coding Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

export const TYPED_STRINGS = [
  'MCA Student & Full Stack Developer',
  'Full Stack Web Developer',
  'Building Real-World Web Applications',
  'Problem Solver & Systems Builder',
];

export const HERO_ORBIT_ICONS = [
  { key: 'react', className: 'floating-icon icon-react', title: 'React.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React' },
  { key: 'js', className: 'floating-icon icon-js', title: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JS' },
  { key: 'node', className: 'floating-icon icon-node', title: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { key: 'express', className: 'floating-icon icon-express', title: 'Express.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', alt: 'Express.js', imgClass: 'express-logo' },
  { key: 'mongodb', className: 'floating-icon icon-mongodb', title: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { key: 'git', className: 'floating-icon icon-git', title: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git' },
  { key: 'php', className: 'floating-icon icon-php', title: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', alt: 'PHP' },
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend Development',
    icon: 'fas fa-laptop-code',
    items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', level: 'Advanced', value: 90 },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', level: 'Advanced', value: 85 },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', level: 'Proficient', value: 85 },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', level: 'Advanced', value: 88 },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', level: 'Proficient', value: 80 },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'fas fa-server',
    items: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', level: 'Proficient', value: 80 },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', level: 'Proficient', value: 75 },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', level: 'Proficient', value: 75, imgClass: 'express-logo' },
    ],
  },
  {
    title: 'Databases',
    icon: 'fas fa-database',
    items: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', level: 'Proficient', value: 80 },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', level: 'Proficient', value: 75 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: 'fas fa-code',
    items: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', level: 'Proficient', value: 75 },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', level: 'Proficient', value: 75 },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', level: 'Intermediate', value: 70 },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', level: 'Intermediate', value: 65 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'fas fa-tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', level: 'Proficient', value: 85 },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', level: 'Proficient', value: 85, imgClass: 'github-logo' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', level: 'Advanced', value: 90 },
      { name: 'XAMPP', faIcon: 'fas fa-server', level: 'Proficient', value: 85 },
      { name: 'MySQL Workbench', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', level: 'Proficient', value: 80 },
    ],
  },
  {
    title: 'AI & Cloud Services',
    icon: 'fas fa-cloud',
    subtitle: 'AI integration and cloud deployment expertise.',
    items: [
      { name: 'Groq API', faIcon: 'fas fa-bolt', level: 'AI Integration', value: 85 },
      { name: 'RAG', faIcon: 'fas fa-brain', level: 'Retrieval Augmented Gen', value: 80 },
      { name: 'Cashfree', faIcon: 'fas fa-credit-card', level: 'Payment Gateway', value: 80 },
      { name: 'Brevo API', faIcon: 'fas fa-envelope-open-text', level: 'Email Service', value: 85 },
    ],
  },
];

export const SERVICES = [
  {
    icon: 'fas fa-layer-group',
    title: 'Full Stack Web Development',
    desc: '"Building responsive full-stack web applications with modern frontend, backend and database technologies."',
    badges: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend & REST API Development',
    desc: '"Developing structured backend systems and RESTful APIs with database integration."',
    badges: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB'],
  },
  {
    icon: 'fas fa-code',
    title: 'Frontend UI Development',
    desc: '"Creating responsive, user-friendly and mobile-friendly interfaces."',
    badges: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js'],
  },
  {
    icon: 'fas fa-brain',
    title: 'AI-Powered Web Solutions',
    desc: '"Integrating AI-powered features into practical web applications."',
    badges: ['AI APIs', 'PHP', 'JavaScript', 'Web Integration'],
  },
];

export const PROJECTS = [
  {
    title: 'Library Management System',
    img: 'projects/OIP1.jpg',
    alt: 'Library Management System',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    desc: 'A complete system for managing library operations including book View and issued, user management, and administrative functions.',
    links: [{ label: 'View Source', icon: 'fab fa-github', href: 'https://github.com/Kishanparekh0369/Library-Management-System', variant: 'btn-outline' }],
  },
  {
    title: 'Portfolio Website',
    img: 'projects/Port.jpg',
    alt: 'Portfolio Website',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    desc: 'A responsive personal portfolio website showcasing skills, projects, and contact information with modern design elements.',
    links: [
      { label: 'Code', icon: 'fab fa-github', href: 'https://github.com/Kishanparekh0369/my-portfolio', variant: 'btn-outline' },
      { label: 'Live Demo', icon: 'fas fa-play', href: 'https://kishanparekh0369.github.io/my-portfolio/', variant: 'btn-primary' },
    ],
  },
  {
    title: 'Hair & Care Studio',
    img: 'projects/hc.jpg',
    alt: 'Hair & Care Studio',
    tech: ['HTML5', 'CSS3', 'WhatsApp API'],
    desc: 'A production-ready booking engine for a premium salon featuring multi-service selection, client-side validation, and instant WhatsApp booking redirects.',
    links: [
      { label: 'Code', icon: 'fab fa-github', href: 'https://github.com/Kishanparekh0369/Hair-Care-Studio', variant: 'btn-outline' },
      { label: 'Live Demo', icon: 'fas fa-play', href: 'https://kishanparekh0369.github.io/Hair-Care-Studio/', variant: 'btn-primary' },
    ],
  },
  {
    title: 'Tic-Tac-Toe AI Engine',
    img: 'projects/ttt.jpg',
    alt: 'Tic Tac Toe AI',
    tech: ['JavaScript', 'HTML', 'CSS'],
    desc: 'An interactive gaming logic engine built entirely in JS, supporting dynamic adjustable AI difficulty parameters and persistent local storage statistics.',
    links: [
      { label: 'Code', icon: 'fab fa-github', href: 'https://github.com/Kishanparekh0369/Kishan_Game', variant: 'btn-outline' },
      { label: 'Live Demo', icon: 'fas fa-play', href: 'https://kishanparekh0369.github.io/Kishan_Game/', variant: 'btn-primary' },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Node.js (Intermediate)',
    issuer: 'HackerRank',
    date: 'Earned on: 06 May 2026',
    desc: 'Successfully passed the HackerRank Node.js (Intermediate) skill certification test, demonstrating proficiency in Node.js, backend development, asynchronous programming, APIs, and server-side JavaScript concepts.',
    image: 'images/download.png',
  },
  {
    name: 'WordPress Website Project',
    issuer: 'Coursera',
    date: '2025',
    desc: 'Built and deployed a complete WordPress website as part of the certification program.',
    image: 'images/c5.jpg',
  },
  {
    name: 'Accounting Talent Hunt',
    issuer: 'Sardar Patel College',
    date: '2022',
    desc: 'Participated and successfully completed the accounting talent hunt program.',
    image: 'images/c2.jpg',
  },
  {
    name: 'State Level Programming Competition',
    issuer: 'P.G. Department of Computer Science & Technology, Sardar Patel University',
    date: 'Tech-Fest 2026 | 14 February 2026',
    desc: 'Participated in the State Level Programming Competition (Post-Graduate Level) as part of a two-member team during Tech-Fest 2026 organized by Sardar Patel University, Vallabh Vidyanagar.',
    image: 'images/tf.jpg',
  },
  {
    name: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'Earned on: 06 May 2026',
    desc: 'Successfully passed the HackerRank Frontend Developer (React) role certification test, demonstrating proficiency in React development, component-based architecture, JavaScript, and frontend problem-solving skills.',
    image: 'images/react js ct.png',
  },
];

export const PROFILES = [
  {
    platform: 'GitHub',
    handle: '@Kishanparekh0369',
    icon: 'fab fa-github',
    desc: 'Explore open-source repositories, full-stack project codebases, and technical contributions.',
    href: 'https://github.com/Kishanparekh0369',
  },
  {
    platform: 'LinkedIn',
    handle: 'Kishan Parekh',
    icon: 'fab fa-linkedin-in',
    iconColor: '#0a66c2',
    desc: 'Connect professionally and view academic achievements, full stack skills, and career progress.',
    href: 'https://www.linkedin.com/in/kishan-parekh-b97190364',
    btnIcon: 'fab fa-linkedin',
  },
  {
    platform: 'HackerRank',
    handle: '@kishanparekh0369',
    icon: 'fab fa-hackerrank',
    iconColor: '#2ec866',
    desc: 'Verified skill certifications in Node.js (Intermediate) and Frontend Developer (React).',
    href: 'https://www.hackerrank.com/profile/kishanparekh0369',
  },
  {
    platform: 'Unstop',
    handle: '@kishanparekh0369',
    icon: 'fas fa-award',
    desc: 'Participated in coding competitions, hackathons, and technical skill assessments.',
    href: 'https://unstop.com/user/kishanparekh0369',
    btnIcon: 'fas fa-trophy',
  },
];

export const UNSTOP_ACHIEVEMENT = {
  title: '30 Days of Consistency – Unstop Coding Challenge',
  cardTitle: '30 Days of Consistency',
  subtitle: 'Unstop Coding Challenge',
  description:
    'A 30-day coding challenge focused on building consistency, improving problem-solving skills, and developing a regular programming practice.',
  status: 'Achievement: Completed 30 Days Successfully 🏆',
  images: [
    {
      src: 'images/unstop-30days-1.jpeg',
      alt: 'Kishan Parekh holding Unstop merchandise — diary, bookmarks and sticker sheet earned from the 30 Days of Consistency challenge',
    },
    {
      src: 'images/unstop-30days-2.jpeg',
      alt: 'Flat-lay of Unstop reward merchandise — black Unstop T-shirt, motivational cards, diary and sticker sheet',
    },
    {
      src: 'images/unstop-30days-3.jpeg',
      alt: '30 Days of Consistency celebration graphic showing the POTD streak calendar with current streak of 31 days alongside Unstop merchandise',
    },
  ],
  highlights: [
    { icon: 'fas fa-calendar-check', text: '30 consecutive days' },
    { icon: 'fas fa-brain', text: 'Problem-solving improvement' },
    { icon: 'fas fa-code', text: 'Daily coding consistency' },
    { icon: 'fas fa-gift', text: 'Unstop recognition & merchandise' },
  ],
  linkedin: {
    label: 'View LinkedIn Post',
    href: 'https://lnkd.in/p/eahNhj5M',
  },
};

export const SOCIALS = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/kishan-parekh-b97190364', icon: 'fa-brands fa-linkedin-in' },
  { title: 'GitHub', href: 'https://github.com/Kishanparekh0369', icon: 'fa-brands fa-github' },
  { title: 'Instagram', href: 'https://www.instagram.com/invites/contact/?igsh=1lzeqlxd2sja7&utm_content=emeoglm', icon: 'fa-brands fa-instagram' },
  { title: 'HackerRank', href: 'https://www.hackerrank.com/profile/kishanparekh0369', icon: 'fab fa-hackerrank' },
  { title: 'Unstop', href: 'https://unstop.com/user/kishanparekh0369', icon: 'fas fa-award' },
];

export const CONTACT = {
  location: 'Samarkha, Anand, Gujarat, India',
  email: 'kishanparekh947@gmail.com',
  phone: '+91 9316361979',
  phoneHref: 'tel:+919316361979',
  whatsappNumber: '9316361979',
};
