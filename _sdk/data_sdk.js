// Content data for the portfolio
const channelContent = {
  'welcome': {
    title: 'welcome',
    desc: 'Welcome to David the Virtual Butler!',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 1.png',
        timestamp: 'Today at 12:00 PM',
        content: 'Hello! Welcome to my design portfolio. I\'m David, a UI/UX designer and frontend developer with a passion for creating beautiful, functional digital experiences.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 2.png',
        timestamp: 'Today at 12:01 PM',
        content: 'This portfolio is styled like Discord for a fun, interactive experience. Browse through the channels on the left to see my work, process, and how to get in touch.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 3.png',
        timestamp: 'Today at 12:02 PM',
        content: 'Feel free to explore! If you have any questions, check out the #about-me or #socials channels.',
        embed: null
      }
    ]
  },
  'featured-projects': {
    title: 'featured-projects',
    desc: 'My best and most recent design work',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 4.png',
        timestamp: 'Yesterday at 3:45 PM',
        content: 'Here are some of my featured projects. Click on the embeds below to see more details.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 5.png',
        timestamp: 'Yesterday at 3:46 PM',
        content: '',
        embed: {
          title: 'E-Commerce Redesign',
          description: 'Complete UI/UX overhaul for a fashion retailer, increasing conversion by 35%.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=E-Commerce',
          url: '#'
        }
      },
      {
        author: 'David',
        avatar: 'assets\avatar 6.png',
        timestamp: 'Yesterday at 3:47 PM',
        content: '',
        embed: {
          title: 'Mobile Banking App',
          description: 'Intuitive design for a fintech startup, focusing on accessibility and security.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Mobile+App',
          url: '#'
        }
      },
      {
        author: 'David',
        avatar: 'assets\avatar 7.png',
        timestamp: 'Yesterday at 3:48 PM',
        content: '',
        embed: {
          title: 'Brand Identity Package',
          description: 'Logo, colors, and guidelines for a tech startup.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Branding',
          url: '#'
        }
      }
    ]
  },
  'case-studies': {
    title: 'case-studies',
    desc: 'In-depth breakdowns of my design process',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 8.png',
        timestamp: '2 days ago at 10:30 AM',
        content: 'Dive deep into my design process with these case studies.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 9.png',
        timestamp: '2 days ago at 10:31 AM',
        content: '',
        embed: {
          title: 'User Research & Wireframing',
          description: 'How I approach problem-solving from research to final design.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Case+Study+1',
          url: '#'
        }
      },
      {
        author: 'David',
        avatar: 'assets\avatar 10.png',
        timestamp: '2 days ago at 10:32 AM',
        content: '',
        embed: {
          title: 'Prototyping & Testing',
          description: 'Iterative design with user feedback loops.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Case+Study+2',
          url: '#'
        }
      }
    ]
  },
  'pricing': {
    title: 'pricing',
    desc: 'Commission rates and packages',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 11.png',
        timestamp: '3 days ago at 2:15 PM',
        content: 'Here\'s my pricing structure for design commissions.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 12.png',
        timestamp: '3 days ago at 2:16 PM',
        content: '',
        embed: {
          title: 'Basic Package - $500',
          description: 'Logo design, basic branding, 2 revisions.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Basic+Package',
          url: '#'
        }
      },
      {
        author: 'David',
        avatar: 'assets\avatar 13.png',
        timestamp: '3 days ago at 2:17 PM',
        content: '',
        embed: {
          title: 'Standard Package - $1,200',
          description: 'UI/UX design for web or mobile, 5 revisions, prototyping.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Standard+Package',
          url: '#'
        }
      },
      {
        author: 'David',
        avatar: 'assets\avatar 14.png',
        timestamp: '3 days ago at 2:18 PM',
        content: '',
        embed: {
          title: 'Premium Package - $2,500+',
          description: 'Full brand identity, multi-platform design, unlimited revisions.',
          image: 'https://via.placeholder.com/400x200/5865F2/FFFFFF?text=Premium+Package',
          url: '#'
        }
      }
    ]
  },
  'process': {
    title: 'my-process',
    desc: 'How I work from brief to delivery',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 15.png',
        timestamp: '4 days ago at 9:00 AM',
        content: 'My design process is collaborative and iterative.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 16.png',
        timestamp: '4 days ago at 9:01 AM',
        content: '1. Discovery & Research\n2. Wireframing & Prototyping\n3. Design & Feedback\n4. Final Delivery',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 18.png',
        timestamp: '4 days ago at 9:02 AM',
        content: 'I typically deliver within 2-4 weeks depending on the project scope.',
        embed: null
      }
    ]
  },
  'testimonials': {
    title: 'testimonials',
    desc: 'What clients say about working with me',
    messages: [
      {
        author: 'Client A',
        avatar: 'assets\avatar 23.png',
        timestamp: '1 week ago at 11:45 AM',
        content: '"David delivered exceptional work on time and exceeded our expectations. Highly recommend!"',
        embed: null
      },
      {
        author: 'Client B',
        avatar: 'assets\avatar 24.png',
        timestamp: '2 weeks ago at 4:20 PM',
        content: '"Great communication and creative solutions. Will work with again."',
        embed: null
      },
      {
        author: 'Client C',
        avatar: 'assets\avatar 25.png',
        timestamp: '3 weeks ago at 1:30 PM',
        content: '"Professional, talented, and easy to work with. 5 stars!"',
        embed: null
      }
    ]
  },
  'about-me': {
    title: 'about-me',
    desc: 'A bit about who I am',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 17.png',
        timestamp: 'Today at 8:00 AM',
        content: 'Hi! I\'m David, a freelance designer based in [Your Location]. I specialize in UI/UX design, branding, and frontend development.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 19.png',
        timestamp: 'Today at 8:01 AM',
        content: 'With 5+ years of experience, I\'ve worked with startups and established companies to create digital products that users love.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 20.png',
        timestamp: 'Today at 8:02 AM',
        content: 'When I\'m not designing, you can find me exploring new tech, hiking, or contributing to open-source projects.',
        embed: null
      }
    ]
  },
  'socials': {
    title: 'socials',
    desc: 'Find me around the internet',
    messages: [
      {
        author: 'David',
        avatar: 'assets\avatar 21.png',
        timestamp: 'Today at 7:00 AM',
        content: 'Connect with me on social media and professional platforms.',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 22.png',
        timestamp: 'Today at 7:01 AM',
        content: '• Twitter: @yourhandle\n• LinkedIn: linkedin.com/in/yourprofile\n• Dribbble: dribbble.com/yourusername\n• Email: hello@yourdomain.com',
        embed: null
      },
      {
        author: 'David',
        avatar: 'assets\avatar 22.png',
        timestamp: 'Today at 7:02 AM',
        content: 'Feel free to reach out for collaborations or just to say hi!',
        embed: null
      }
    ]
  }
};

// Export for use in other scripts
window.portfolioData = channelContent;
