// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rkhan77',
  },

  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 4,
        exclude: {
          forks: true,
          projects: ['rkhan77/Passwork-Checker'],
        },
      },
      manual: {
        projects: [],
      },
    },

    external: {
      header: 'Automation Projects',
      projects: [
        {
          title: 'Automated Client Billing & Payment System',
          description:
            'Reduced manual billing preparation time by 90% by automating fee calculation and email generation for client payments',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
        },
        {
          title: 'Automated Client Onboarding Email System',
          description:
            'Automated personalised welcome emails for new clients and triggered onboarding workflows',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap2.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap2.png',
        },
        {
          title: 'Client Data Synchronisation Pipeline',
          description:
            'Automated client database updates with accurate record validation and cross-system syncing',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap3.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap3.png',
        },
        {
          title: 'Cross-Platform Contact Sync Automation',
          description:
            'Developed automation that syncs and updates contacts between Cellcast and Outlook automatically',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap4.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap4.png',
        },
        {
          title: 'AI-Powered SMS Marketing',
          description:
            'Sends AI generated marketing SMS and track campaigns automatically',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap5.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap5.png',
        },
        {
          title: 'Automated Job Allocation Notification System',
          description:
            'Automated internal job allocation notifications and workforce coordination emails',
          imageUrl:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap6.png',
          link:
            'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap6.png',
        },
      ],
    },
  },

  seo: {
    title: 'Rezaul K | Portfolio',
    description: 'Automation, AI, and data engineer',
    imageURL:
      'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/img/ap1.png',
  },

  social: {
    linkedin: 'rezaul-k',
    instagram: 'rezaul_kh4n',
    gurushots: 'https://gurushots.com/RawPixel',
    phone: '+61 449 695 807',
    email: 'khanrezaul77@gmail.com',
  },

  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/Rkhan77/rkhan77.github.io/main/Projects/Resume_rkhan_2026.pdf',
  },

  skills: [
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'SQL',
    'VBA',
    'n8n',
    'Microsoft Azure (Entra ID)',
    'Docker',
    'Rest API',
    'Large Language Model (LLM)',
    'Git',
    'Docker',
    'Windows,macOS & Linux',
    'SAP',
    'Microsoft Dynamics 365',
    'Microsoft Excel',
    'Xero (Invoices)',
    'Hubspot',
    'Penelope',
    'Jira Service Management',
  ],

  experiences: [
    {
      company: 'Ace Tutoring',
      position: 'AI Platform Developer (Contract)',
      from: 'March 2026',
      to: 'July 2026',
      companyLink: 'https://acetutoring.com.au/',
    },
    {
      company: 'EverAbility Group',
      position: 'System Administrator (Contract)',
      from: 'Feb 2025',
      to: 'Jul 2025',
      companyLink: 'https://www.everabilitygroup.org.au/',
    },
    {
      company: 'ATOM Supply',
      position: 'Data Support Officer',
      from: 'Jun 2023',
      to: 'Dec 2024',
      companyLink: 'https://www.atom.com.au/',
    },
  ],

  certifications: [
    {
      name: 'Python for Data Science & AI Development',
      body: 'Coursera - Authorized by IBM',
      year: 'Nov 2022',
      link: 'https://www.credly.com/badges/01051519-10c3-41a3-9bbf-d9f8b3b8bd1e/linked_in_profile',
    },
    {
      name: 'Python Programming Certification ',
      body: 'Programming Hub',
      year: 'Nov 2021',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Edith Cowan University',
      degree: 'Master of Management Information Systems',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Southeast University',
      degree: 'Bachelor of Business Administration',
      from: '2012',
      to: '2017',
    },
    
  ],

  googleAnalytics: {
    id: 'G-2E9QDKTNEB',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'forest',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: false,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald',
      'corporate', 'synthwave', 'retro', 'cyberpunk',
      'valentine', 'halloween', 'garden', 'forest',
      'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
      'black', 'luxury', 'dracula', 'cmyk', 'autumn',
      'business', 'acid', 'lemonade', 'night', 'coffee',
      'winter', 'dim', 'nord', 'sunset', 'caramellatte',
      'abyss', 'silk', 'procyon',
    ],
  },

  enablePWA: false,
};

export default CONFIG;
