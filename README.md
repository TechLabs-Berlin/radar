<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117248447-47c27b80-ae40-11eb-8fcf-386931c43b01.png" width="600"/></p>

---

<p align="center">
At TechLabs Berlin, we use the Semester Radar to present the semester to the students as a comprehensive timeline of events and milestones. It is always referred to as the main source for event details.</p>

---

# Overview

The Radar is a [NuxtJS](https://nuxtjs.org/) application, rendered as a static site. All it's content is based on simple text files (`.yaml` format) located within this repository, which is converted into simple HTML files during the build process. The application is built by [GitHub Actions](https://docs.github.com/en/actions) and hosted on [GitHub Pages](https://pages.github.com/).

## Structure

The main items in the Radar are: the **Timeline**, the **Events**, and the **Milestones**:

<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117249238-8ad11e80-ae41-11eb-9712-14767b29e3f2.png" width="800"/></p>

- **Timeline**: shows the whole semester at a glance; divided in weeks, gives an overview of events and milestones each week
- **Events**: weekly events happening throuhgout the semester; each event can have resources attached to it (meeting room link, slides, event recordings, etc)
- **Milestones**: are deadlines for the students throughout the semester; they can include to-dos that the student has to complete by a certain date

All Events and Milestones have their own pages, accessible by either clicking on their titles or on their names within the Timeline. This allows for sending out links to specific events and milestones to the students, when necessary.

Additionally, there are also other secondary pages displayed when clicking on the hamburger menu on top right: __FAQ__, __Media__, and __Newsletter__.

# How to use it

While the Radar is a very simple application, is does require some initial configuration and some knowledge of Git and JavaScript. If you'd like to use the radar, start by cloning this repo locally and configuring it to your location.

## Local development

Once you clone the repo locally, you can start the dev server with hot reloading, and see the changes live on your browser:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Configuration

These are the main parts that need to be configured/modified:

### Title and location badge

<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117254654-eeab1580-ae48-11eb-80ac-c91dc99117df.png" width="600"/></p>

The title which appears on the browser title window can be changed in `/nuxt.config.js`, under `head: titleTemplate`. The term name, appearing on the top of the page, can be edited in the file `content/term.yaml`.

For the location badge, you can replace `static/icon-location.png` with the badge of your location

### Navigation menu and social icons

<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117255002-6da04e00-ae49-11eb-9c9a-1c9871daf4e9.png" width="600"/></p>

The top menu (hamburger) is composed of internal links to other pages and social icons leading to our social media pages. 

- Internal links: you can modify the links in the file `content/nav-links.yaml`
- Social links: you can modify the links in the file `content/social-links.yaml`

### Newsletter

We use a personalized AWS Lambda function endpoint in our newsletter form, connected to out Mailchimp account. You'll need to create your own, and change the endpoint on the file `content/newsletter.yaml`.

### Footer

The footer contents can be changed in the file `content/footer.yaml`.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
