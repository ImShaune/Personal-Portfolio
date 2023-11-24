import { FaReact, FaAngular, FaNodeJs, FaVuejs, FaHtml5, FaCss3, FaPython, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";

import {
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiPostgresql,
    SiMongodb,
    SiVitest,
    SiPython,
    SiTypescript,
    SiCss3,
    SiNextdotjs,
    SiDjango,
    SiSelenium,
    SiPostman,
    SiReact,
    SiAngular,
    SiVuedotjs,
    SiNodedotjs,
    SiMysql,
    SiHtml5,
    SiGit,
    SiDocker,
} from "react-icons/si"

export const skills = {
    languages: {
        title: "Languages",
        stacks: [
            {
                stack: "JavaScript",
                icon: SiJavascript
            },

            {
                stack: "TypeScript",
                icon: SiTypescript
            },

            {
                stack: "Python",
                icon: SiPython
            },

        ]
    },

    frameworks: {
        title: "Frameworks",
        stacks: [
            {
                stack: "ReactJS",
                icon: SiReact
            },

            {
                stack: "NextJS",
                icon: SiNextdotjs
            },

            {
                stack: "AngularJS",
                icon: SiAngular
            },

            {
                stack: "VueJS",
                icon: SiVuedotjs
            },

            {
                stack: "NodeJS",
                icon: SiNodedotjs
            },
            
            {
                stack: "ExpressJS",
                icon: SiExpress
            },


        ]
    },

    dataBase: {
            title: "Data Base",
            stacks: [ 
            {
                stack: "SQL",
                icon: SiPostgresql
            },

            {
                stack: "MySQL",
                icon: SiMysql
            }

        
        ]
    },

    others: {
        title: "Others",
        stacks: [
            {
                stack: "HTML",
                icon: SiHtml5
            },

            {
                stack: "CSS",
                icon: SiCss3
            },

            {
                stack: "Git",
                icon: SiGit
            },

            {
                stack: "Linux",
                icon: FaLinux
            },
            
            {
                stack: "Postman",
                icon: SiPostman
            },


            {
                stack: "Docker",
                icon: SiDocker
            },


        ]
    }
}