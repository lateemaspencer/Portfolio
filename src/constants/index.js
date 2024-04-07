import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  discovery,
  vice,
  resolute,
  watchbox,
  carrent,
  jobit,
  tripguide,
  threejs,
  solidity,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web3 Developer',
    icon: mobile,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'solidity',
    icon: solidity,
  },
];

const experiences = [
  {
    title: 'Lead Full-Stack Developer',
    company_name: 'Watchbox',
    icon: watchbox,
    iconBg: '#1D1B1C',
    date: 'August 2021 - Present',
    points: [
      'Collaborating with UX designers to implement user-friendly interfaces that improved user engagement and conversion rates and drove millions of additional revenue.',
      'Develop API platform for segmentation, personalized recommendations and omni-channel messaging that reduced cart-abandonment rate by 37%, leading to a $3M increase.',
      'Partner with the product team to develop a React-based intelligent search solution, leading to a 20% improvement in page views per session and enhanced user product discovery.',
      'Optimize UI components for peak performance across diverse devices and browsers, leading to a 30% uplift in user engagement.',
      'Develop a component-based design systems using Figma to streamline the product design process',
      'Implement automated testing and continuous integration/continuous deployment (CI/CD) practices ',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Resolute AI',
    icon: resolute,
    iconBg: '#FFF',
    date: 'September 2018 - August 2021',
    points: [
      'Migrated Angular application to React and implementing a full user experience redesign. The project resulted in a beta MVP within a demanding 6-month timeframe.',
      'Developed and maintained enterprise software solutions resulting in 20% increase in revenue.',
      'Architected and built a reusable component library. This resulted in a 40% reduction in development time.',
      'Designed and developed scalable architecture and systems that extract, store, and process large amounts of data',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Vice Media',
    icon: vice,
    iconBg: '#E6DEDD',
    date: 'May 2015 - September 2018',
    points: [
      'Responsible for the initial development and maintenance of VICE in house video streaming site.',
      'Used low level backend Node.js development to front end React and vanilla JS for development of the user interface. ',
      'Transitioned software development efforts to a test-driven development (TDD) process.',
      'Interacted with Testing Team, Scrum Masters and Business Analysts for fixing of Issues.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Discovery Communications',
    icon: discovery,
    iconBg: '#E6DEDD',
    date: 'November 2013 - February 2015',
    points: [
      'Provided rapid, robust front- and back-end web development optimization user experience, search engine ranking, sales, brand positioning and related metrics.',
      'Worked with award-winning developers to create and update websites created with Python Django and Wordpress',
      'Optimized sites for usability, search engine optimization and accessibility',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
