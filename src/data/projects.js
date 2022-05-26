import ipipe from "../assets/images/logo.jpg";
import ipipeGif from "../assets/gifs/ipipe.mp4";
import wegweiserKommune from "../assets/images/wegweiser-kommune.jpg";
import wegweiserKommuneGif from "../assets/gifs/wegweiser-kommune.mp4";
import elternGeld from "../assets/images/elterngeld-digital.png";
import elternGeldGif from "../assets/gifs/elterngeld-digital.mp4";
import bayernDigital from "../assets/images/bayern-digital.png";
import bayernDigitalGif from "../assets/gifs/bayern-digital.mp4";
import imageboard from "../assets/images/imageboard.png";
import delicia from "../assets/images/delicia.png";
import pingpong from "../assets/images/pingpong.png";
import inter from "../assets/images/inter.jpg";
import review from "../assets/images/review.png";
import petition from "../assets/images/petition.png";
import gma from "../assets/images/gma.png";
import gmaGif from "../assets/gifs/gma.mp4";

export const projects = [
  {
    dataTarget: "project-1",
    image: wegweiserKommune,
    title: "Wegweiser Kommune",
    headline:
      "Redesign of the Bertelsman foundation project's 'Wegweiser Kommune' (German Design Award 2022)",
    stack: "Using React, Redux, Typescript, Leaflet, Scss, Bootstrap",
    gifUrl: wegweiserKommuneGif,
    githubLink: "",
    websiteLink: "https://www.wegweiser-kommune.de/",
    type: "init",
  },
  {
    dataTarget: "project-2",
    image: elternGeld,
    title: "ElternGeld Digital",
    headline:
      "Digitalizing Germany's leading parental payments system, under the Ministry of Families, Senior citizens, Women and Youth",
    stack: "Using Vanilla JavaScript, jQuery, Anton CMS, Scss",
    gifUrl: elternGeldGif,
    githubLink: "",
    websiteLink: "https://www.elterngeld-digital.de/ams/Elterngeld",
    type: "init",
  },
  {
    dataTarget: "project-3",
    image: bayernDigital,
    title: "Bayern Digital Ministry ",
    headline:
      "Itegrating Interactive map showing the AI projects around Bayern, Germany",
    stack: "Using React, Redux, Typescript, Leaflet, Scss",
    gifUrl: bayernDigitalGif,
    githubLink: "",
    websiteLink:
      "https://www.stmd.bayern.de/themen/mobilitaetsprojekte-in-bayern/",
    type: "init",
  },

  {
    dataTarget: "project-4",
    image: ipipe,
    title: "ipipe",
    headline:
      "High-Tech start-up company innovating solution for a worldwide water problem",
    text: "Building this project was as one can belive, not about the HTML and CSS, but about how to deploy and handle the host services, working daily with FileZilla and Bluehost, and exploring the statistics and user flow in the page using Google Analytics. I was very glad to build this website and gain that essential experience.",
    stack: "Using HTML, Scss, JavaScript",
    gifUrl: ipipeGif,
    githubLink: "https://github.com/tomerrajuan/ipipe",
    websiteLink: "https://ipipe-tec.com",
    type: "private-live",
  },

  {
    dataTarget: "project-5",
    image: gma,
    title: "Gastronomy-app",
    headline:
      "Application being developed to help business follow their inventory and prices",
    stack: "Using React, PostgresSQL, Express, Scss",
    gifUrl: gmaGif,
    githubLink: "https://github.com/tomerrajuan/gastronomy-app",
    websiteLink: "",
    type: "private",
  },

  {
    dataTarget: "project-6",
    image: inter,
    title: "Film-Studio",
    headline:
      "Film-Studio is an example website i took to practice. the website was made as a company Portfolio and shows essentials such as location, contact details, and a gallery that shows the companies projects (this project was't asked for by the company and was made without their consent)",
    stack: "Using AWS, React, Leaflet, Scss",
    link: "https://github.com/tomerrajuan/inter",
    gifUrl: "",
    githubLink: "https://github.com/tomerrajuan/inter",
    websiteLink: "",
    type: "private",
  },

  {
    dataTarget: "project-7",
    image: review,
    title: "Re-view",
    headline:
      "Re-view is a search engine for restaurants that uses REST APIs to collect information from multiply sources of a specific restaurant.",
    text: "Re-view was my final project at Spiced-Academy in Berlin. It took me deep into dealing with APIs as i wanted to request information from few sources in the same time, each of them with its own access requirments. this project taught the power and beuty of APIs.",
    gifUrl: "",
    githubLink: "https://github.com/tomerrajuan/final-project",
    websiteLink: "",
    type: "private",
  },

  {
    dataTarget: "project-8",
    image: imageboard,
    title: "Imageboard",
    headline:
      "Imageboard is a web application built with Vue, allowing users to upload images and displaying them in a gallery, using AWS Cloud Storage.",
    text: "In that project on top of learning and practicing Vue i found very helpful and important learning how to get along with the Amazon Cloud services.",
    gifUrl: "",
    githubLink: "https://github.com/tomerrajuan/Imageboard",
    websiteLink: "",
    type: "private",
  },
  {
    dataTarget: "project-9",
    image: petition,
    title: "Petition",
    headline:
      "The petition projects is a combination of PostgreSQL back-end work for collecting signatures from authenticated users using a log-in and registration process.",
    text: "This was the my first work with databases and my first attempt of collecting and deleting data from the database. From the front-end hand, i used the Canvas methods to collect the signature given by the user and stoe its path in the database.",
    gifUrl: "",
    githubLink: "https://github.com/tomerrajuan/petition",
    websiteLink: "",
    type: "private",
  },

  {
    dataTarget: "project-10",
    image: delicia,
    title: "Redesign",
    headline:
      "A Redesign i did as a practice to a website. (this project was't asked for by the company and was made without their consent)",
    stack: "Using Html, Scss, JavaScript, slick.js",
    gifUrl: "",
    githubLink: "https://github.com/tomerrajuan/delicia",
    websiteLink: "",
    type: "private",
  },

  {
    dataTarget: "project-11",
    image: pingpong,
    title: "Ping-Pong tables map",
    headline:
      "Map application where users can upload locations of ping-pong tables",
    stack: "Using AWS, React, Scss",
    gifUrl: "",
    githubLink: "https://github.com/tomerrajuan/pingpong",
    websiteLink: "",
    type: "private",
  },
];
