import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gughanathan",
  lastName: "Mani",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Python Developer / DevOps Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Tamil", "Kannada","English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gugupy",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gughanathan-m-079913171/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ManiGughan",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:gugu.ap900@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Python Developer and DevOps Engineer</>,
  subline: (
    <>
      I'm Gugu, a Python developer at <InlineCode>BI2Value GmBH</InlineCode>, specializing in building 
      Flask and AI-powered applications. In my free time, I work on personal projects, exploring new 
      ideas and technologies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://teams.microsoft.com/l/meeting/new",
  },
  freelancer: {
    display: true,
    link: "https://www.freelancer.in/hireme/guguap900",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a freelancer, passionate Python developer with a strong commitment to open-source contributions and a 
        growing expertise in ReactJS. I work extensively with Superset and Flask-AppBuilder to build 
        data-driven applications, leveraging my experience across Azure, AWS, and GCP to deliver scalable 
        and efficient solutions. 
        <br/><br/>
        Currently, I am expanding my skill set by diving deeper into frontend 
        development while maintaining a solid foundation in backend systems. I am always eager to learn, 
        collaborate, and contribute to innovative projects that push the boundaries of technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BI2Value GmBH",
        timeframe: "2023 - Present",
        role: "Python Developer/DevOps Engineer",
        achievements: [
          <>
            Customize Apache superset and maintain.
          </>,
          <>
            Developing Phelina a powerful AI for Data insights.
          </>,
          <>
            Create and maintain the Airflow DAGs for the data pipeline.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/qmantic/phelina-01.gif",
            alt: "Pheline MSTeams Bot",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "ITC Infotech India Ltd",
        timeframe: "2019 - 2023",
        role: "Linux Administrator/Azure Cloud Engineer",
        achievements: [
          <>
            Managed and maintained Linux servers and Azure cloud infrastructure.
          </>,
          <>
            Setup complete infrastructure for the new projects.
          </>,
        ],
        images: [],
      },
      {
        company: "Fractalio Data Pvt Ltd",
        timeframe: "2017 - 2019",
        role: "Linux Administrator",
        achievements: [
          <>
            Managed and maintained Linux servers on client site.
          </>,
          <>
            Monitor and daily/monthly backup of the servers.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Anna University",
        description: <>Studied software engineering.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Able to build any software using python.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Flask Appbuilder",
        description: <>Quickly build web application Flask-Appbuilder + React.JS.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Azure/AWS/GCP Cloud",
        description: <>Experience all these three cloud providers.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
