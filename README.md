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

Additionally, there are also other secondary pages displayed when clicking on the hamburger menu on top right: **FAQ**, **Media**, and **Newsletter**.

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

## Content

All content in the Radar is written on YAML files. YAML (a recursive acronym for "YAML Ain't Markup Language") is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. In simple terms, it is a text file that allows structure data.

The content files are located in the folder `/content`. You can edit any of these files and see the changes in real time in you local dev environment. To publish content changes, you'd have to simply `git commit` and `git push` to your repo, so that the action to rebuild and redeploying the content is fired.

There are three main pieces of content you'll be working with: the Timeline, the Events, and the Milestones.

### Timeline

By editing the file `/content/timeline.yaml`, you define the main **sections** within the timeline. The weeks in each section are populated automatically from the start and end dates. The files is a collection of items under `timeline:`, which contain the following properties:

| property      | description                                                                                              | example        | required | default |
| ------------- | -------------------------------------------------------------------------------------------------------- | -------------- | -------- | ------- |
| `title`       | the title of the timeline section                                                                        | Academic Phase | yes      | -       |
| `description` | the description of the timeline section, shown when hovering over the (?) icon next to the section title | (see below)    | yes      | -       |
| `startDate`   | the section's starting date (Monday), in the format YYY/MM/DD                                            | 2021/05/17     | yes      | -       |
| `endDate`     | the section's ending date (Sunday), in the format YYY/MM/DD                                              | 2021/07/04     | yes      | -       |

For example:

```yaml
- title: Project Phase
  description: |
    This is prime time! You imagine and implement a prototype in a project of your own.

    You team up as a group of 4-6 Techies and work together to create something big. Experienced mentors will be on your side for support.
  startDate: 2021/05/17
  endDate: 2021/07/04
```

... will result in:

<p><img src="https://user-images.githubusercontent.com/5139870/117278292-ec54b580-ae60-11eb-8bca-9c59e3283576.png" width="600"/></p>

The Events and Milestones are then placed automatically within their respective weeks on the Timeline.

### Events

Inside the `/content/events` folder, you'll find files to all the events in the semester. Each file contain the following properties:

| property        | description                                                                                                                    | example                     | required | type       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | -------- | ---------- | -------- |
| `title`         | the event title                                                                                                                | Welcome Event ST21          | yes      | `string`   |
| `date`          | time and date of the event, including timezone                                                                                 | `2021-03-16T19:30:00+02:00` | yes      | `datetime` |
| `description`   | the event's description (accepts Markdown)                                                                                     | (see below)                 | yes      | `string`   | markdown |
| `showResources` | use in case you want the listing to display the items in `resources` before the event                                          | `true`                      | no       | `boolean`  |
| `meetings`      | where you place the video links for the meetings; these are going to appear on the event card 60 minutes before the event time | (see below)                 | no       | `array`    |
| `forms`         | list of forms (like feedback forms)                                                                                            | (see below)                 | no       | `array`    |
| `resources`     | list of any other resources (slides, recording, links, etc)                                                                    | (see below)                 | no       | `array`    |

Each of the items in `meetings`, `forms`, and `resources` should follow the same structure:

| property      | description                              | example                           | required | type                                                             |
| ------------- | ---------------------------------------- | --------------------------------- | -------- | ---------------------------------------------------------------- |
| `title`       | the name of the item                     | Meet: Kick-Off                    | yes      | `string`                                                         |
| `description` | item's description                       | The main room where we will meet. | yes      | `string`                                                         |
| `type`        | item's type (defines which icon to show) | `meeting`                         | yes      | `meeting`,`link`,`slides`,`form`,`video`,`tool`,`game`,`nothing` |

In case `meetings`, `forms`, or `resources` are empty, you should set their values to `[]`

### Examples:

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
