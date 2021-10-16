module.exports = {
  head: {
    title: 'Léonard Lecouey',
    description: 'Full stack engineer and designer from France, living in Japan',
    keywords: 'Full stack, Full stack engineer, designer, tech leader, developer',
  },

  theme: {
    dark: 'Dark',
    light: 'Light',
    system: 'System',
  },

  links: {
    index: 'Home',
    about: 'About',
    back: 'Back',
    social: {
      codepen: 'Codepen',
      dribbble: 'Dribbble',
      github: 'Github',
      linkedin: 'LinkedIn',
    },
  },

  // index

  index: {
    head: {
      title: 'Hi!',
    },
  },

  // about

  about: {
    title: 'About',

    hero: [
      ['Full', ' stack', ' engineer'],
      ['and', ' designer'],
      ['Living', ' in', ' Japan'],
    ],

    me: {
      intro: `I am a French Full stack engineer and designer with over {year} years of experience.
        Currently living in Tokyo.`,
      current: 'Presently working at Appier Japan, where I have the opportunity to build end-to-end products.',
      history: `Prior to moving to Japan, I worked in various companies,
        improving my skills in various domains from development, system administration to web design.`,
      moto: 'Always thriving to deliver simpler solutions to every problem.',
      linkedin: 'More about me on {linkedin}.',
    },

    skills: {
      title: 'Skills',
      items: {
        frontend: {
          title: 'Front-end',
          description: 'Fluent in HTML, CSS and JavaScript',
        },
        backend: {
          title: 'Back-end',
          description: 'NodeJs, Ruby',
        },
        devops: {
          title: 'DevOps',
          description: 'Sysadmin, AWS, CI/CD, Web Servers, containers and shell scripting',
        },
        interactionDesign: {
          title: 'Interaction Design',
          description: 'Prototype, Animation, Micro-Interaction, Accessibility',
        },
        uiDesign: {
          title: 'UI Design',
          description: 'Moodboarding, High-Fidelity composition, Design system',
        },
        uxDesign: {
          title: 'UX Design',
          description: 'User research, Wireframing, Mockup, user testing',
        },
      },
    },

    cv: {
      title: 'CV',
      workplace: {
        appier: 'Appier Japan',
        emin: 'Emotion Intelligence',
        syllage: 'Syllage',
        frenchEmbassy: 'French Embassy in Japan',
        telindus: 'Telindus',
        af83: 'AF83',
      },
      job: {
        techleader: 'Tech leader',
        fullstack: 'Full stack engineer',
        sysadmin: 'System administrator',
      },
    },
  },

  // chat

  chat: {
    content: {
      me: {
        hi: 'Hi!',
        howAreYou: 'How are you?',
        fantastic: 'Fantastic!',
        oh: 'Oh...',
        cheer: 'Maybe this will cheer you up',
        leonard: 'I\'m Leonard by the way ',
        thanks: 'Thank you my good sir',
        bye: 'Thank you for coming',
        seeYou: 'See you around',
        profession: 'Full stack engineer and designer',
        workplace: 'At Appier Japan',
        challenging: 'I would say it\'s challenging',
      },

      visitor: {
        awesome: 'I\'m doing awesome',
        notGood: 'Not so good',
        thanks: 'Thank you my good sir',
        living: 'What do you do for living?',
        friends: 'Yes, we are already friends',
        seeYou: 'See you around',
        where: 'And where?',
        boring: 'It sounds boring',
      },
    },

    replies: {
      great: 'Great',
      meh: 'Meh',
      thanks: 'Thanks',
      who: 'Who?',
      iKnow: 'I know',
      bye: 'Bye!',
      where: 'Where?',
      andSo: 'And so?',
    },
  },

  // form

  form: {
    previous: 'Previous',
    next: 'Next',
  },

  // footer

  footer: {
    contact: 'Anything to say? Send me a nice message',
    source: 'View source on {link}',
  },

  // error

  error: {
    notFound: 'The page you are looking for does not exist.',
    occurred: 'Oups, an error occurred.',
    goHome: 'Go back home',
  },
};
