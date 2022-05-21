import ipipe from "../assets/images/logo.jpg";
import ipipeGif from "../assets/gifs/ipipe.mp4";
import wegweiserKommune from "../assets/images/wegweiser-kommune.jpg";
import wegweiserKommuneGif from "../assets/gifs/wegweiser-kommune.mp4";

import elternGeld from "../assets/images/elterngeld-digital.png";
import elternGeldGif from "../assets/gifs/elterngeld-digital.mp4";

import bayernDigital from "../assets/images/bayern-digital.png";
import bayernDigitalGif from "../assets/gifs/bayern-digital.mp4";

import imageboard from "../assets/images/imageboard.png";

import inter from "../assets/images/inter.jpg";
import review from "../assets/images/review.png";
import petition from "../assets/images/petition.png";

import gma from "../assets/images/gma.png";
import gmaGif from "../assets/gifs/gma.mp4";

export const projects = [{
        dataTarget: "project-1",
        image: wegweiserKommune,
        title: "Wegweiser Kommune",
        headline: "Redesign of the Bertelsman foundation project 'Wegweiser Kommune' (German Design Award 2022)",
        text: "Using React, Redux, Typescript, Leaflet, Scss, Bootstrap",
        link: "https://www.wegweiser-kommune.de/",
        gifUrl: wegweiserKommuneGif,
        type: "init",
    },
    {
        dataTarget: "project-2",
        image: elternGeld,
        title: "ElternGeld Digital",
        headline: "Digitalizing Germany's leading parental payments system, under the Ministry of Families, Senior citizens, Women and Youth",
        text: "Using Vanilla JavaScript, jQuery, Anton CMS",
        link: "https://www.elterngeld-digital.de/ams/Elterngeld",
        gifUrl: elternGeldGif,
        type: "init",
    },
    {
        dataTarget: "project-3",
        image: bayernDigital,
        title: "Bayern Digital Ministry ",
        headline: "Itegrating Interactive map showing the AI projects around Bayern, Germany",
        text: "Using React, Redux, Typescript, Leaflet, Scss",
        link: "https://github.com/tomerrajuan/petition",
        gifUrl: bayernDigitalGif,
        type: "init",
    },

    {
        dataTarget: "project-4",
        image: ipipe,
        title: "ipipe",
        headline: "High-Tech start-up company innovating solution for a worldwide water problem",
        text: "Building this project was as one can belive, not about the HTML and CSS, but about how to deploy and handle the host services, working daily with FileZilla and Bluehost, and exploring the statistics and user flow in the page using Google Analytics. I was very glad to build this website and gain that essential experience.",
        link: "https://ipipe-tec.com",
        gifUrl: ipipeGif,
        type: "private",
    },

    {
        dataTarget: "project-5",
        image: review,
        title: "Re-view",
        headline: "Re-view is a search engine for restaurants that uses REST APIs to collect information from multiply sources of a specific restaurant.",
        text: "Re-view was my final project at Spiced-Academy in Berlin. It took me deep into dealing with APIs as i wanted to request information from few sources in the same time, each of them with its own access requirments. this project taught the power and beuty of APIs.",
        link: "https://github.com/tomerrajuan/final-project",
        gifUrl: "",
        type: "private",
    },

    {
        dataTarget: "project-6",
        image: inter,
        title: "Film-Studio",
        headline: "Film-Studio is a website i build for a dubbing company in Germany",
        text: "This project could have also been built without using React, but the smooth, unnoticible rendering of React makes it much nicer for the user, especially when enjoying the gallery section. I also used a map component based on google maps to add the location of the company.",
        link: "https://github.com/tomerrajuan/inter",
        gifUrl: "",
        type: "private",
    },

    {
        dataTarget: "project-7",
        image: imageboard,
        title: "Imageboard",
        headline: "Imageboard is a web application built with Vue, allowing users to upload images and displaying them in a gallery, using AWS Cloud Storage.",
        text: "In that project on top of learning and practicing Vue i found very helpful and important learning how to get along with the Amazon Cloud services.",
        link: "https://github.com/tomerrajuan/Imageboard",
        gifUrl: "",
        type: "private",
    },
    {
        dataTarget: "project-8",
        image: petition,
        title: "Petition",
        headline: "The petition projects is a combination of PostgreSQL back-end work for collecting signatures from authenticated users using a log-in and registration process.",
        text: "This was the my first work with databases and my first attempt of collecting and deleting data from the database. From the front-end hand, i used the Canvas methods to collect the signature given by the user and stoe its path in the database.",
        link: "https://github.com/tomerrajuan/petition",
        gifUrl: "",
        type: "private",
    },
    {
        dataTarget: "project-9",
        image: gma,
        title: "Gastronomy-app",
        headline: "Application that is built to help business follow their inventory and prices",
        link: "https://github.com/tomerrajuan/gastronomy-app",
        gifUrl: gmaGif,
        type: "private",
    },
];