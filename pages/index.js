import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import styles from "../styles/Home.module.css";

const toggleTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

const SKILLS = [
  {
    title: "Proficient",
    skills: [
      "HTML",
      "SASS / LESS / CSS",
      "Javascript",
      "Typescript",
      "ES6",
      "React",
      "Redux/Mobx",
      "Ajax",
      "Json",
      "Jest",
      "Webpack",
      "Babel",
      "Eslint",
      "TailwindCSS",
      "Jquery",
      "Salesforce",
      "Git",
      "Bash",
      "Jira",
      "SCRUM / Agile",
    ],
  },
  {
    title: "Comfortable",
    skills: [
      "React-native",
      "Expo",
      "Next js",
      "Node js",
      "Apollo/GraphQL",
      "React-query",
      "Styled-Components",
      "Vite",
      "MySQL",
      "Firebase",
      "Google functions / AWS Lambda",
      "Oauth",
      "Prisma",
      "Material ui / Ant design",
      "Google Analytics",
      "Shopify",
      "Pendo.io",
    ],
  },
  {
    title: "Familiar",
    skills: [
      "Angular",
      "Backbone",
      "PHP",
      "Rust",
      "Apex(salesforce)",
      "Postgresql",
      "Figma",
      "Blockchain",
      "Web3",
    ],
  },
];

const EXPERIENCE = [
  {
    link: "https://www.linkedin.com/company/gbsfo/",
    title: "GBSFO",
    position: [
      {
        title: "Frontend developer",
        date: "Oct 2013 - Mar 2016",
      },
    ],
  },
  {
    link: "https://www.linkedin.com/company/cisco/",
    title: "Cisco",
    position: [
      {
        title: "Frontend developer",
        date: "Oct 2013 - Mar 2016",
      },
    ],
  },
  {
    link: "https://www.linkedin.com/company/cisco/",
    title: "Provectus IT",
    position: [
      {
        title: "Frontend developer",
        date: "Mar 2016 - Jun 2019",
      },
      {
        title: "Senior Frontend developer",
        date: "Jun 2019 - Present",
      },
    ],
  },
  {
    link: "https://www.linkedin.com/company/modeln/",
    title: "Model N",
    position: [
      {
        title: "Frontend developer",
        date: "Mar 2016 - Jun 2019",
      },
      {
        title: "Senior Frontend developer",
        date: "Jun 2019 - Present",
      },
    ],
  },
];

const PROJECTS = [
  {
    title: "Restaurs",
    description:
      "Big react-native/firebase application for ios and android for managing restaurant, track guests activity and simplify communication between waiters,managers and guests",
    status: "In-development",
  },
  {
    title: "Tech-crypto Blog Website",
    description:
      "Next-js/prisma based personal blog with tech subjects, admin panel and ability to manage posts",
    status: "In-development",
  },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const onThemeSwitchClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    toggleTheme(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    toggleTheme(theme);
  }, []);

  return (
    <div className="bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
      <Head>
        <title>Oleksandr Karliuchenko</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} flex w-full flex-grow flex-col`}>
        <div className="mx-auto flex w-full flex-row items-center justify-between px-4 pt-2 pb-4 lg:w-4/6 lg:px-0">
          <div className="items-centerjustify-start flex flex-row">
            <div className="relative ml-2 h-14 w-14 ">
              <Image
                alt="profile"
                className="rounded-full"
                height={280}
                width={280}
                src="/ava.jpeg"
              />
              <ReactCountryFlag
                className="emojiFlag absolute"
                countryCode="UA"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1.5rem",
                  right: "-25%",
                  top: 0,
                }}
                aria-label="Ukraine"
              />
            </div>
            <div className="ml-4 flex flex-col items-start justify-start">
              <div className="text-lg sm:text-xl">Oleksandr Karliuchenko</div>
              <div className="text-orange-500 sm:place-self-end">
                Software Engineer
              </div>
            </div>
          </div>
          <div>
            {theme === "dark" ? (
              <FaSun
                className="h-6 w-6 cursor-pointer transition duration-150 hover:text-orange-500 sm:h-8 sm:w-8"
                onClick={onThemeSwitchClick}
              />
            ) : (
              <FaMoon
                className="h-6 w-6 cursor-pointer transition duration-150 hover:text-orange-500 sm:h-8 sm:w-8"
                onClick={onThemeSwitchClick}
              />
            )}
          </div>
        </div>

        <div className="w-full bg-zinc-200 py-4 dark:bg-zinc-700">
          <div className="mx-auto flex w-full flex-col items-start justify-start px-4 lg:w-4/6 lg:px-0">
            <div className="mb-2 text-xl">About me</div>
            <div>
              Hi, my name is Oleksandr, i am software engineer from New York,
              USA. I am inspired by technologies and have a passion for
              developing user-friendly and reliable systems. I am providing
              value and expediting the efficiency and effectiveness of
              organizational success as a well-versed in technology frontend
              developer. Interested in innovations, frontend, blockchain and
              web3.
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full flex-col items-start justify-start py-4 px-4 lg:w-4/6 lg:px-0">
          <div className="text-xl">Skills</div>
          <div className="flex w-full flex-col items-start justify-start pt-2 lg:flex-row lg:justify-between">
            {SKILLS.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-start justify-start py-1 lg:w-1/3"
              >
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="flex flex-row flex-wrap items-center justify-start	">
                  {item.skills.map((item) => (
                    <div
                      key={item}
                      className="mr-2 mb-2 cursor-pointer rounded-full bg-zinc-200 py-1 px-2 transition duration-150 hover:bg-orange-500 dark:bg-zinc-700 dark:hover:bg-orange-500"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-zinc-200 py-4 dark:bg-zinc-700">
          <div className="mx-auto flex w-full flex-col items-start justify-start px-4 lg:w-4/6 lg:px-0">
            <div className="text-xl">Professional experience</div>
            <div className="flex w-full flex-row flex-wrap items-start justify-between pt-2">
              {EXPERIENCE.map((item, index) => (
                <div className="mt-2 w-1/2 lg:w-1/4" key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg underline"
                  >
                    {item.title}
                  </a>
                  {item.position.map((position) => [
                    <div className="mt-2 text-sm" key={position.title}>
                      {position.title}
                    </div>,
                    <div className="text-sm" key={position.date}>
                      {position.date}
                    </div>,
                  ])}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full flex-col items-start justify-start py-4 px-4 lg:w-4/6 lg:px-0">
          <div className="text-xl">Personal Projects</div>
          <div className="flex w-full flex-col flex-wrap items-start justify-start pt-2 sm:flex-row sm:justify-between">
            {PROJECTS.map((item, index) => (
              <div className="mt-4 w-full sm:mt-2 sm:w-1/2" key={index}>
                <div className="text-lg">
                  {item.title}
                  <span className="block text-xs italic text-orange-500 sm:ml-2 sm:inline">
                    {item.status}
                  </span>
                </div>
                <div className="mt-2 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-zinc-200 py-4 dark:bg-zinc-700">
          <div className="mx-auto flex w-full flex-col items-start justify-start px-4 lg:w-4/6 lg:px-0">
            <div className="text-xl">Education</div>
            <div className="mt-2 w-full">
              <a
                href="https://en.wikipedia.org/wiki/Odesa_National_Polytechnic_University"
                target="_blank"
                rel="noreferrer"
                className="text-lg underline"
              >
                Odessa National Polytechnic University
              </a>
              <div className="mt-2 text-sm">Bachelor&apos;s diploma</div>
              <div className="text-sm">2008 - 2013</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex h-20 flex-row items-center justify-center border-t-2 border-zinc-800 pt-2 pb-2 dark:border-zinc-100">
        <a href="https://github.com/snownoop" target="_blank" rel="noreferrer">
          <FaGithub className="h-8 w-8 cursor-pointer transition duration-150 hover:text-orange-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/cphr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="ml-4 h-8 w-8 cursor-pointer transition duration-150 hover:text-orange-500" />
        </a>
        <a
          href="https://www.instagram.com/__cphr/"
          target="_balnk"
          rel="noreferrer"
        >
          <FaInstagram className="ml-4 h-8 w-8 cursor-pointer transition duration-150 hover:text-orange-500" />
        </a>
        <a
          href="mailto: sashayolo17@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="ml-4 h-8 w-8 cursor-pointer transition duration-150 hover:text-orange-500" />
        </a>
      </footer>
    </div>
  );
}
