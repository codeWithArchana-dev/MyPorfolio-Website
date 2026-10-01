/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
 * ============================================================================
 *  Every piece of text, link, project, and certificate on the site comes from
 *  this file. To update the portfolio, edit here — you should never need to
 *  touch a component.
 *
 *  ⚠️  ANYTHING MARKED `TODO:` IS A PLACEHOLDER AND MUST BE REPLACED WITH REAL
 *      INFORMATION BEFORE THE SITE GOES LIVE. Do not ship placeholder projects
 *      or certificates — an honest portfolio is the entire point.
 * ============================================================================
 */

export const profile = {
  name: 'Archana Vishwakarma',
  firstName: 'Archana',
  roles: ['Frontend Developer', 'React Developer', 'Web Developer' , 'Javascript Developer' , 'Software Developer'],
  tagline: 'Frontend Developer | React Developer | Web Developer',
  location: 'Noida, Uttar Pradesh, India',
  shortLocation: 'Noida, India',
  status: 'Open to Work',
  availabilityBadge: 'Open to Frontend Developer Opportunities',
  education: 'MCA — Currently Pursuing',
  university: 'Indira Gandhi National Open University (IGNOU)',

  intro:
    "Hi, I'm Archana Vishwakarma, a Frontend Developer passionate about building responsive and user-friendly web applications. I work with HTML, CSS, JavaScript, React.js, Bootstrap, TailwindCSS and Git/GitHub. I'm continuously improving my skills by building real-world projects and currently looking for a Frontend Developer opportunity.",

  email: 'archana10122004@gmail.com',

  links: {
    // Share-tracking query params stripped — they leak the referrer and expire.
    linkedin: 'https://www.linkedin.com/in/codewitharchu',
    github: 'https://github.com/codeWithArchana-dev',
  },

  // Files live in /public.
  resumePath: '/Archana_CV.pdf',
  // Illustrated avatar stands in until a real photo is added. To use a photo,
  // drop it in /public and point this at it (e.g. '/archana.jpg').
  photoPath: '/avatar.svg',
}

export const snapshot = [
  { label: 'Role', value: 'Frontend Developer', icon: 'Code2' },
  { label: 'Specialization', value: 'React Development', icon: 'Atom' },
  { label: 'Education', value: 'MCA — Currently Pursuing', icon: 'GraduationCap' },
  { label: 'Location', value: 'Noida, India', icon: 'MapPin' },
  { label: 'Status', value: 'Open to Work', icon: 'BadgeCheck', highlight: true },
]

export const about = {
  paragraphs: [
    'I am currently pursuing a Master of Computer Applications (MCA) from Indira Gandhi National Open University (IGNOU).',
    'I have a strong interest in technology and have built a foundation in Frontend Development. I have worked with HTML, CSS, JavaScript, React.js, and Bootstrap to build responsive and user-friendly web applications.',
    'I enjoy creating clean and interactive user interfaces and continuously improving my development skills. I am passionate about learning new technologies and enhancing my problem-solving abilities.',
    'I am currently looking for opportunities to apply my skills, gain practical experience, contribute to real-world projects, and grow as a Frontend Developer.',
  ],
}

/**
 * Skills. Only list what can be confidently discussed in an interview.
 * `level` is deliberately a plain word, never a fake percentage bar.
 */
export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'Layout',
    skills: ['HTML5', 'CSS3', 'JavaScript' , 'Bootstrap' , 'TailwindCSS'],
  },
  {
    title: 'Version Control',
    icon: 'GitBranch',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Tools & Workflow',
    icon: 'Wrench',
    skills: ['VS Code', 'Responsive Design', 'Chrome DevTools'],
  },

  {
    title: 'Database',
    icon: 'DatabaseZap',
    skills: ['SQL' , 'MySQL']
  }, 

  {
    title: 'Currently Learning',
    icon: 'Sparkles',
    // TODO: confirm these are genuinely being learned; remove anything that isn't.
    skills: ['React.js' , 'Python' , 'Django' ],
    muted: true,
  },
]

/**
 * Real projects. Each entry powers both the homepage card and the full
 * case-study page at /projects/<slug>.
 *
 * Empty fields hide themselves in the UI rather than showing blanks, so
 * `challenges` / `solutions` / `learned` stay empty until real answers are
 * added — invented ones fall apart the moment an interviewer asks about them.
 *
 * Card artwork in /public/projects/ is hand-drawn from each app's real UI.
 * Replacing these with actual screenshots is a worthwhile upgrade.
 */
export const projects = [

    {
    slug: 'zaptro-app',
    title: 'Zaptro - E-Commerce Website',
    featured: true,
    summary:
      'A modern e-commerce website with product browsing, cart management, and a smooth shopping experience, built with React and TailwindCSS.',
    tech: ['React.js', 'TailwindCSS', 'HTML' , 'Vite'],
    features: [
      'Product browsing and category-based filtering',
  'Product search functionality',
  'Shopping cart management',
  'User signup and login flow',
  'Responsive e-commerce interface',
  'Order placement and order summary',
    ],
    liveUrl: 'https://zaptro-eta.vercel.app/',
    repoUrl: 'https://github.com/codeWithArchana-dev/Zaptro',
    cover: '/projects/zaptro-app.svg',
    caseStudy: {
      overview:
        'A modern e-commerce website built with React, Tailwind CSS, and JavaScript that provides users with a smooth and user-friendly way to browse products, manage their cart, and place orders.',
      purpose:
        'To provide users with a simple and convenient way to browse products, manage their shopping cart, and place orders through a smooth and user-friendly e-commerce experience.',
      role: 'Designed and developed the complete frontend, including page layouts, reusable components, responsive design, product browsing, cart functionality, and user interactions.',
      solutions: [],
      learned: [],
      screenshots: [],
    },
  },
  {
    slug: 'clinic-app',
    title: 'MediCare+ — Clinic App',
    featured: true,
    summary:
      'A healthcare clinic website with user signup/login, doctor listings, and online appointment booking, built for a smooth and comfortable patient experience.',
    tech: ['React.js', 'Bootstrap', 'HTML', 'CSS'],
    features: [
      'Online appointment booking for patients',
      'User signup and login flow',
      'Doctor listings and clinic service pages',
      'Responsive layout built with Bootstrap',
    ],
    liveUrl: 'https://clinic-app-flax.vercel.app',
    repoUrl: 'https://github.com/codeWithArchana-dev/Clinic-app',
    cover: '/projects/clinic-app.svg',
    caseStudy: {
      overview:
        'A clinic website designed with HTML, CSS, Bootstrap, and React to give patients a smooth and user-friendly way to learn about the clinic and book care.',
      purpose:
        'Small clinics often have no easy way for patients to book online. This project makes appointment booking and finding treatment information straightforward, putting patient comfort and satisfaction first.',
      role: 'Designed and built the complete frontend — page layouts, component structure, and responsive styling.',
      challenges: [],
      solutions: [],
      learned: [],
      screenshots: [],
    },
  },
  {
    slug: 'google-gemini-clone',
    title: 'Google Gemini Clone',
    featured: true,
    summary:
      'A conversational chat interface modelled on Google Gemini, recreating the prompt-and-response experience with a clean, responsive React UI.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    features: [
      'Conversational chat interface for sending prompts and reading responses',
      'Suggestion cards for quick-start prompts',
      'Recent-prompt sidebar for revisiting earlier questions',
      'Responsive layout that adapts from desktop to mobile',
    ],
    liveUrl: 'https://google-gemini-rust-one.vercel.app',
    repoUrl: 'https://github.com/codeWithArchana-dev/Google-gemini',
    cover: '/projects/google-gemini.svg',
    caseStudy: {
      overview:
        'A frontend clone of the Google Gemini chat interface, built to recreate a modern AI chat experience — users type a prompt through a simple conversational UI and receive a response in the same flow.',
      purpose:
        'Built to practise handling asynchronous data, managing conversation state across a multi-step interface, and reproducing a polished production-grade UI from scratch.',
      role: 'Built the entire interface in React — chat layout, prompt input, response rendering, sidebar, and responsive styling.',
      challenges: [],
      solutions: [],
      learned: [],
      screenshots: [],
    },
  },
  {
    slug: 'textutils',
    title: 'TextUtils',
    featured: true,
    summary:
      'A React text-utility app for manipulating and analysing text in real time — case conversion, cleanup, live word and character counts, and a dark mode.',
    tech: ['React.js', 'Bootstrap', 'CSS'],
    features: [
      'Convert text to uppercase or lowercase',
      'Remove extra spaces from pasted text',
      'Live word and character count',
      'Dark / light mode toggle',
      'Responsive UI built with Bootstrap and custom CSS',
    ],
    liveUrl: 'https://text-utils-chi-flax.vercel.app',
    repoUrl: 'https://github.com/codeWithArchana-dev/TextUtils',
    cover: '/projects/textutils.svg',
    caseStudy: {
      overview:
        'A text-utility web app built with React.js that lets users manipulate and analyse text in real time, with every transformation reflected instantly as they type.',
      purpose:
        'Built to get hands-on with React state management and controlled inputs, while producing something genuinely useful for everyday text cleanup.',
      role: 'Built the full application — component structure, state management with React hooks, the dark/light theme, and responsive styling.',
      challenges: [],
      solutions: [],
      learned: [],
      screenshots: [],
    },
  },
]

export const experience = {
  title: 'Frontend Development',
  subtitle: 'Personal & Academic Projects',
  description:
    'Building responsive and interactive web applications using modern frontend technologies while gaining practical experience with React.js, JavaScript, responsive design, and version control.',
  points: [
    'Built responsive web interfaces using HTML, CSS, JavaScript, and React.js.',
    'Developed reusable frontend components.',
    'Created responsive layouts for multiple screen sizes.',
    'Used Git and GitHub for version control.',
    'Worked on personal and academic development projects.',
  ],
}

/**
 * ⚠️ Certificate details are placeholders — fill in the exact names, dates and
 * issuing bodies from the actual certificates, then drop the image/PDF files
 * into /public/certificates/.
 */
export const certificates = [

   {
    id: 'uncodemy',
    kind: 'certificate',
    title: 'Java Full Stack Development',
    organization: 'Uncodemy',
    date: '25th june 2026',
    result: '',
    description: 'During the Java Full Stack training, I learned the fundamentals of Java, HTML, CSS, JavaScript, and frontend development. I also gained practical experience by working on frontend projects such as an Admin Dashboard and Zaptro e-commerce website.',
    credentialId: '',
    verifyUrl: '',
    file: '/certificates/UncodemyCertificate.png',
    icon: 'Award',
  },
  {
    id: 'hackathon',
    kind: 'achievement',
    // TODO: use the actual hackathon name if it has one
    title: 'Hackathon Participation',
    organization: 'Baba Saheb Bhimrao Ambedkar University',
    date: '30th November 2023',
    // TODO: state the real outcome. If it was participation only, keep
    // "Participant". Never present participation as a win.
    result: 'Participant',
    description:
      'Participated in a college-level hackathon, collaborating on problem-solving and technology-based challenges.',
    credentialId: '',
    verifyUrl: '',
    file: '/certificates/Hackathon.jpeg',
    icon: 'Trophy',
  },
 

  {
    id: 'scienceDay',
    kind: 'achievement',
    // TODO: use the actual hackathon name if it has one
    title: 'National Science Day',
    organization: 'Baba Saheb Bhimrao Ambedkar University',
    date: '28th February 2024',
    // TODO: state the real outcome. If it was participation only, keep
    // "Participant". Never present participation as a win.
    result: 'Participant',
    description:
      'Participated in a Rangoli Competition on National Science Day at college and secured 1st place.',
    credentialId: '',
    verifyUrl: '',
    file: '/certificates/scienceDay.jpeg',
    icon: 'Trophy',
  },

   {
    id: 'webmania2.0',
    kind: 'achievement',
    // TODO: use the actual hackathon name if it has one
    title: 'WEBMANIA2.0',
    organization: 'Baba Saheb Bhimrao Ambedkar University',
    date: '30th April 2024',
    // TODO: state the real outcome. If it was participation only, keep
    // "Participant". Never present participation as a win.
    result: 'Participant',
    description:
      ' Participated in a group-based Web Design Competition organized by the college , Collaborated with team members to design and present a web project.',
    credentialId: '',
    verifyUrl: '',
    file: '/certificates/Webmania2.0.jpeg',
    icon: 'Trophy',
  },


   {
    id: 'webmania1.0',
    kind: 'achievement',
    // TODO: use the actual hackathon name if it has one
    title: 'WEBMANIA1.O',
    organization: 'Baba Saheb Bhimrao Ambedkar University',
    date: '26th April 2023',
    // TODO: state the real outcome. If it was participation only, keep
    // "Participant". Never present participation as a win.
    result: 'Participant',
    description:
      'Participated in a group-based Web Design Competition organized by the college , Collaborated with team members to design and present a web project.',
    credentialId: '',
    verifyUrl: '',
    file: '/certificates/Webmania1.0.jpeg',
    icon: 'Trophy',
  },

    {
    id: 'Adca',
    kind: 'certificate',
    title: 'Advance Diploma in Computer Application',
    organization: 'Institute of Computer Education',
    date: '2021',
    result: '',
    description: 'Completed an Advanced Diploma in Computer Applications (ADCA), gaining practical knowledge of computer fundamentals, MS Office, internet and digital tools, database concepts, programming fundamentals, and web technologies. The course strengthened my understanding of software applications and basic computer-based problem solving.',
    credentialId: '',
    verifyUrl: '',
    file: '/certificates/AdcaCertificate.jpeg',
    icon: 'Award',
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: 'Currently Pursuing',
    current: true,
    description:
      'Advancing core computer science fundamentals alongside hands-on frontend development practice.',
  },
  {
    Degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    Institution: 'Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow',
    period: '2022 — 2025',
    current: false,
    description:
      'Built the computer science foundation — programming fundamentals, web technologies, and databases — that my frontend work is based on.',
  },
]

/**
 * Hand-picked repositories. Quality over quantity — 3 to 6 strong ones.
 * TODO: replace with real repository names and links.
 */
export const repositories = [

   {
    name: 'Zaptro',
    description: 'Zaptro e-commerce website with product browsing, cart management, user authentication, and order placement.',
    language: 'JavaScript',
    url: 'https://github.com/codeWithArchana-dev/Zaptro',
    demo: 'https://zaptro-eta.vercel.app/',
  },

  {
    name: 'Clinic-app',
    description: 'MediCare+ clinic website with appointment booking and user authentication.',
    language: 'JavaScript',
    url: 'https://github.com/codeWithArchana-dev/Clinic-app',
    demo: 'https://clinic-app-flax.vercel.app',
  },
  {
    name: 'Google-gemini',
    description: 'A responsive chat interface modelled on the Google Gemini UI.',
    language: 'JavaScript',
    url: 'https://github.com/codeWithArchana-dev/Google-gemini',
    demo: 'https://google-gemini-rust-one.vercel.app',
  },
  {
    name: 'TextUtils',
    description: 'Real-time text manipulation and analysis app with dark mode.',
    language: 'JavaScript',
    url: 'https://github.com/codeWithArchana-dev/TextUtils',
    demo: 'https://text-utils-chi-flax.vercel.app',
  },
]

export const strengths = [
  {
    icon: 'Layout',
    title: 'Frontend Development',
    text: 'Focused on building modern and user-friendly frontend experiences.',
  },
  {
    icon: 'Atom',
    title: 'React Development',
    text: 'Building component-based web applications using React.js.',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive Design',
    text: 'Creating interfaces that work smoothly across mobile, tablet, and desktop devices.',
  },
  {
    icon: 'TrendingUp',
    title: 'Continuous Learning',
    text: 'Continuously improving my development skills through learning and real-world projects.',
  },
  {
    icon: 'Puzzle',
    title: 'Problem Solving',
    text: 'Passionate about solving development challenges and improving my technical abilities.',
  },
  {
    icon: 'Users',
    title: 'Team Mindset',
    text: 'Ready to collaborate, learn from experienced developers, receive feedback, and contribute to a development team.',
  },
]

export const contact = {
  heading: "Let's Connect",
  text: "I'm currently looking for Frontend Developer opportunities and would love to connect with teams where I can apply my skills, gain practical experience, and grow as a developer.",
}

export const finalCta = {
  heading: 'Looking for a Frontend Developer?',
  text: "I'm currently open to opportunities where I can contribute my frontend development skills, learn from experienced teams, and grow as a developer.",
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

/**
 * EmailJS configuration for the contact form.
 * Create a free account at https://www.emailjs.com, then put the three IDs in
 * a `.env` file at the project root (see .env.example). Until these are set the
 * form falls back to opening the visitor's mail client with a prefilled email,
 * so it never silently fails.
 */
export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

export const isEmailjsConfigured = Boolean(
  emailjs.serviceId && emailjs.templateId && emailjs.publicKey
)
