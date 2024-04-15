

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [

    {
        title: "ReactJs",
        icon: "/assets/tech/reactjs.png",
    },
    {
        title: "React Native",
        icon: "/assets/tech/reactnative.png",
    },
    {
        title: "Expo",
        icon: "/assets/tech/expo.png",
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: "/assets/tech/html.png",
    },
    {
        name: "CSS 3",
        icon: "/assets/tech/css.png",
    },
    {
        name: "JavaScript",
        icon: "/assets/tech/javascript.png",
    },
    {
        name: "TypeScript",
        icon: "/assets/tech/typescript.png",
    },
    {
        name: "Tailwind CSS",
        icon: "/assets/tech/tailwind.png",
    },
    {
        name: "React JS",
        icon: "/assets/tech/reactjs.png",
    },
    {
        name: "Redux",
        icon: "/assets/tech/redux.png",
    },
    {
        name: "Formik",
        icon: "/assets/tech/formik-icon.png",
    },

    {
        name: "Scss",
        icon: "/assets/tech/scss.png",
    },
    {
        name: "Node JS",
        icon: "/assets/tech/nodejs.png",
    },
    {
        name: "Express JS",
        icon: "../assets/tech/expressjs.png",
    },
    {
        name: "Git",
        icon: "/assets/tech/git.png",
    },

    {
        name: "Expo",
        icon: "/assets/tech/expo.png"
    },
    {
        name: "Native Paper",
        icon: "/assets/tech/nativepaper.png"
    },
    {
        name: "Jitsi Meet",
        icon: "/assets/tech/jitsimeet.png"
    }
];

const tools = [
    {
        name: "VS Code",
        icon: "/assets/tools/vscode.png",
    },
    {
        name: "ChatGPT",
        icon: "/assets/tools/ChatGPT.png",
    },
    {
        name: "Postman",
        icon: "/assets/tools/postman.png",
    },
    {
        name: "Ubuntu",
        icon: "/assets/tools/ubuntu.png",
    },
];

const experiences = [
    {
        title: "Evon Technologies Pvt. Ltd.",
        company_name: "Associate Developer",
        icon: "/assets/evonLogo.png",
        iconBg: "#383E56",
        date: "Dec 2022 - Present",
        points: [
            "Experience in Developing and maintaining ReactJS & React Native applications, prioritizing speed and seamless operation across various devices.",
            "Worked with both bare native and Expo projects.",
            "Expertise in Redux for efficient state management.",
            "Experience with Formik and Yup for seamless form handling and validation.",

        ],
    },
    {
        title: "prmInfotech, Dehradun",
        company_name: "Junior Developer",
        icon: "/assets/prmlogo.png",
        iconBg: "#383E56",
        date: "Jan 2022 - Nov 2022",
        points: [
            "Developed and maintained ReactJS & React Native applications, prioritizing speed and seamless operation across various devices.",
            "Collaborated with frontend and backend teams to implement new features and ensure smooth integration within the applications.",
            "Conducted troubleshooting to identify and resolve front - end issues, ensuring optimal user experience.",
            "Assisted in backend development tasks, including APIintegration and data management, to support front - endfunctionality.",
            "Utilized version control systems like Git for codemanagement and collaborated effectively with cross - functional teams.",

        ],
    },


    {
        title: "Graphic Era Hill University, Dehradun ",
        company_name: "Bachelor of Technology(CSE)",
        icon: "/assets/gehuLogo.png",
        iconBg: "black",
        date: "2018 - 2022",
        points: [
            "Completed Engineering in Computer Scienece.",
            "Participated actively in many coding competition.",
            "Apart from studies did lot of problem solving on platforms like Hackerrank and GFG."

        ],
    },
];



const projects = [
    {
        name: "Real-Time Messaging",
        description:
            "Developed a real-time chat application utilizing WebSockets for instant messaging. Implemented features for seamless communication and live updates between users.Demonstrated proficiency in WebSocket technology and real-time data synchronization.",
        tags: [
            {
                name: "Websocket",
                color: "blue-text-gradient",
            },
            {
                name: "HTML, CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image:
            "assets/chatapp.png",
        alt: "ChatApp",
        source_code_link: "https://github.com/parthdhwajendramishra/SocketIo_ChatApp",
        live_link: "https://github.com/parthdhwajendramishra/SocketIo_ChatApp",
        live_link_visible: false,
        git_link_visible: true
    },
    {
        name: "Support Management System",
        description:
            "At Evon I led the development of a support management application tailored to swiftly address user inquiries across diverse websites. By harnessing Jitsi Meet, I seamlessly integrated powerful messaging and calling features, significantly advancing my grasp of WebRTC technology. This immersive hands-on journey honed my proficiency in deploying real-time communication solutions within web applications. Furthermore, managing this project on Expo provided invaluable insights into maintaining a unified codebase for both mobile and web platforms, enhancing my versatility as a developer.",
        tags: [
            {
                name: "React Native, Expo",
                color: "blue-text-gradient",
            },
            {
                name: "Jitsi Meet",
                color: "green-text-gradient",
            },
            {
                name: "React Native Paper",
                color: "pink-text-gradient",
            },
        ],
        image:
            "/assets/supportManagement.png",
        alt: "Pro Connect Up",

        source_code_link: "https://github.com/Rajeshesh/ProConnectUp",
        live_link: "https://github.com/Rajeshesh/ProConnectUp",
        live_link_visible: false,
        git_link_visible: false
    },

    {
        name: "My Portfolio",
        description:
            "A portfolio site with ReactJS and tailored it with Tailwind CSS. It's a sleek showcase of my work, marrying dynamic functionality with elegant design. Explore my projects seamlessly on this polished platform. Powered by ReactJS and styled with  Tailwind CSS.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "framer-motion",
                color: "pink-text-gradient",
            },
        ],
        image:
            "/assets/portfolio.png",
        alt: "Portfolio",
        source_code_link: "",
        live_link: "",
        live_link_visible: false,
        git_link_visible: false
    },
];

export {
    navLinks,
    services,
    technologies,
    experiences,
    projects,
    tools,
};
