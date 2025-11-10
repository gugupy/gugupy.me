import {
    About,
    Blog,
    Gallery,
    Home,
    Newsletter,
    Person,
    Social,
    Work,
} from "@/types";
import { InlineCode, Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
    firstName: "Gughanathan",
    lastName: "Mani",
    name: `Gugu`,
    role: "Python Developer",
    avatar: "/images/avatar.jpg",
    email: "gugu.ap900@gmail.com",
    location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["Tamil", "English", "Kannata"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
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
        icon: "twitter",
        link: "https://x.com/ManiGughan",
    },
    {
        name: "Threads",
        icon: "threads",
        link: "https://www.threads.com/@gugu_mani",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
];

const home: Home = {
    path: "/",
    image: "",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Transforming Ideas into Scalable Systems</>,
    featured: {
        display: true,
        title: (
            <Row gap="12" vertical="center">
                <strong className="ml-4">Gugu's</strong>{" "}
                <Line background="brand-alpha-strong" vert height="20" />
                <Text marginRight="4" onBackground="brand-medium">
                    Featured work
                </Text>
            </Row>
        ),
        href: "https://github.com/gugupy/adminjs-keycloak",
    },
    subline: (
        <>
            Python developer at <InlineCode>BI2Value GmbH</InlineCode>, crafting
            Flask and AI-driven apps.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
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
                I'm a freelance Python developer passionate about open source,
                specializing in Superset and Flask-AppBuilder for data-driven
                applications. I work across Azure, AWS, and GCP to build
                scalable solutions, and I’m expanding my expertise in ReactJS
                and frontend development while continuing to strengthen my
                backend skills.
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
                    <>Customize Apache superset and maintain.</>,
                    <>Developing Phelina a powerful AI for Data insights.</>,
                    <>
                        Create and maintain the Airflow DAGs for the data
                        pipeline.
                    </>,
                    <>Maintain infrastructure on Azure and AWS.</>,
                ],
                images: [
                    {
                        src: "/images/projects/qmantic/phelina-01.gif",
                        alt: "Phelina MSTeams Bot",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "ITC Infotech India Ltd",
                timeframe: "2019 - 2023",
                role: "Linux Administrator/Azure Cloud Engineer",
                achievements: [
                    <>
                        Managed and maintained Linux servers and Azure cloud
                        infrastructure.
                    </>,
                    <>Setup complete infrastructure for the new projects.</>,
                ],
                images: [],
            },
            {
                company: "Fractalio Data Pvt Ltd",
                timeframe: "2017 - 2019",
                role: "Linux Administrator",
                achievements: [
                    <>Managed and maintained Linux servers on client site.</>,
                    <>Monitor daily and monthly backup of the servers.</>,
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
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical skills",
        skills: [
            {
                title: "Languages",
                description: <></>,
                tags: [
                    { name: "Python", icon: "python" },
                    { name: "Rust", icon: "rust" },
                    { name: "Javascript", icon: "javascript" },
                    { name: "TypeScript", icon: "typescript" },
                ],
                // optional: leave the array empty if you don't want to display images
                images: [],
            },
            {
                title: "Cloud Infrastructure",
                description: <></>,
                // optional: leave the array empty if you don't want to display images
                tags: [
                    { name: "Azure", icon: "azure" },
                    { name: "AWS", icon: "aws" },
                    { name: "GCP", icon: "gcp" },
                ],
                images: [],
            },
            {
                title: "Infrastructure as Code (IaC)",
                description: <></>,
                // optional: leave the array empty if you don't want to display images
                tags: [
                    { name: "Pulumi", icon: "pulumi" },
                    { name: "Terraform", icon: "terraform" },
                ],
                images: [],
            },
        ],
    },
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Writing about technology",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work: Work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/gallery/hori-01.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vert-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vert-02.jpg",
            alt: "image",
            orientation: "vertical",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
