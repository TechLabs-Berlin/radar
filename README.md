<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117248447-47c27b80-ae40-11eb-8fcf-386931c43b01.png" width="600"/></p>

<h1 align="center">Semester Radar</h1>

<p align="center">
<strong>One page that shows a whole semester at a glance: a timeline of events and deadlines, built from plain text files and hosted for free.</strong>
</p>

<p align="center">
<a href="#quick-start">Quick start</a> ·
<a href="#make-it-yours">Make it yours</a> ·
<a href="#updating-the-content">Update content</a> ·
<a href="#deploying">Deploy</a> ·
<a href="CONTRIBUTING.md">Contribute</a>
</p>

---

At TechLabs Berlin we use the Semester Radar to present the semester to students as a timeline of **events** and **milestones**. It is always referred to as the main source for event details. If you run a course, a bootcamp, a study group or any program that has a start, an end and things happening in between, you can run your own Radar too.

> **Status: back to life.** The Radar had been quiet for a while. It now installs and builds on current Node (24) again, runs on Nuxt 3, checks your content on every change, and has a CI check for pull requests. If you want to try it, give feedback or help out, you are very welcome: see [Contributing](#contributing).

## Why the Radar

- **Everything on one page.** A timeline of the whole semester, with every event and deadline one click away. Every event and milestone has its own link to share.
- **Content is just text.** Events, milestones, FAQ and more are small YAML files with Markdown descriptions, kept in Git. Review changes like code, and roll back anything.
- **No server, no database.** It builds to a static site and runs on free hosting such as GitHub Pages.
- **Hard to break.** The build checks every content file and stops with the file name and the problem, so a typo can't silently remove an event.
- **Friendly for non-developers.** Edit a file in the GitHub web editor, open a pull request, and the check tells you if something is wrong.
- **Fair to everyone's clock.** Times are shown in the visitor's own time zone, and say which one it is (for example `7:30 p.m. CET`).
- **Flexible.** Several locations in one codebase, an optional reduced public version, and an optional shared password.

## Quick start

You need [Node.js](https://nodejs.org/) 24 (the version in `.nvmrc`; with [nvm](https://github.com/nvm-sh/nvm) just run `nvm use`) and Git.

```bash
git clone https://github.com/TechLabs-Berlin/radar.git
cd radar
nvm use        # picks the Node version from .nvmrc
npm install
npm run dev    # open http://localhost:3000
```

Edit any file in `content-bln/` and the page updates immediately.

## Make it yours

1. **Choose your location code.** Run `npm run init -- <your code>` (for example `npm run init -- ber`). It sets `LOCATION` in `radar.config.ts`, renames `content-bln/` to `content-<your code>/` and copies the current badge to `public/icon-<your code>.png`. Replace that copy with your own badge. Run it once, from a clean checkout.
2. **Set the term and the timeline.** Edit `term.yaml` and `timeline.yaml`.
3. **Replace the events and milestones.** Delete the ones in `events/` and `milestones/` and add your own, starting from a copy of an existing file.
4. **Adjust the extras.** Menu and social links, FAQ, media, announcement banner, footer and the newsletter form (see the table below).
5. **Deploy it** (see [Deploying](#deploying)).

Where to change what:

| I want to change...         | Edit                                                          |
| --------------------------- | ------------------------------------------------------------- |
| The term name in the header | `content-bln/term.yaml`                                       |
| The phases of the semester  | `content-bln/timeline.yaml`                                   |
| An event                    | `content-bln/events/<event>.yaml`                             |
| A milestone or deadline     | `content-bln/milestones/<milestone>.yaml`                     |
| The announcement banner     | `content-bln/announcement.yaml`                               |
| The FAQ                     | `content-bln/faq.yaml`                                        |
| Recordings and media        | `content-bln/media.yaml`                                      |
| Menu links and social icons | `content-bln/nav-links.yaml`, `content-bln/social-links.yaml` |
| The footer                  | `content-bln/footer.md`                                       |
| The browser tab title       | `nuxt.config.ts` (`app.head.titleTemplate`)                   |
| The colors                  | `tailwind.config.ts`                                          |
| The newsletter endpoint     | `components/MailchimpForm.vue`                                |

## Updating the content

You don't need to be a developer to update the Radar:

1. Open the file in GitHub and click the pencil icon (or edit it locally).
2. Commit your change to a branch and open a pull request.
3. The **CI check** builds the whole site. If a file is broken, it fails and names the file and the problem.
4. Merge the pull request. The site is rebuilt and deployed automatically.

To add an event, copy an existing file in `content-bln/events/`, rename it (the file name becomes the link, for example `kick-off.yaml` is `/event/kick-off`) and change the properties. All properties are described in the [content reference](#content) below.

## Deploying

`npm run generate` creates the complete static site in `.output/public`, which you can put on any static host.

The repository ships with a GitHub Actions setup for GitHub Pages:

1. Copy `.github/workflows/deploy-xxx.yml.example` to `.github/workflows/deploy-<your code>.yml`, replace the placeholders in it (committer name and email) and pick the `cp` line that matches whether you use a custom domain.
2. Create a branch named `deploy` that contains a `README.md` (and a `CNAME` file if you use a custom domain). The workflow builds the site, copies those files next to it and pushes the result to this branch.
3. In the repository settings, serve GitHub Pages from the `deploy` branch.
4. Optional: add a repository secret `ACCESS_PASSWORD` to ask visitors for a shared password (see the [developer notes](#developer-notes) for what this does and does not protect).

### Netlify

1. Create a new site from your fork or copy of this repository.
2. Set the build command to `npm run generate` and the publish directory to `.output/public`.
3. Netlify reads the Node version from `.nvmrc`. Deploy, and the site is served at the URL Netlify gives you.

### Cloudflare Pages

1. Create a new Pages project from your fork or copy of this repository and choose the framework preset **None**.
2. Set the build command to `npm run generate` and the build output directory to `.output/public`.
3. Set the environment variable `NODE_VERSION` to the version in `.nvmrc` (for example `24`). Deploy, and the site is served at the `*.pages.dev` address Cloudflare gives you.

## Contributing

Contributions are welcome, from fixing a typo to adding a feature. Start with [CONTRIBUTING.md](CONTRIBUTING.md). Good places to begin:

- Issues labelled [`good first issue`](https://github.com/TechLabs-Berlin/radar/labels/good%20first%20issue) or [`help wanted`](https://github.com/TechLabs-Berlin/radar/labels/help%20wanted)
- [Discussions](https://github.com/TechLabs-Berlin/radar/discussions) for questions, ideas, or to show how you use the Radar
- Improving this documentation: if something confused you, it will confuse the next person too

Ideas we would love help with: better docs for people running their own Radar, a refresh of the demo content, making the newsletter form independent of one specific provider, and moving to the next Nuxt major version.

## How it works

The Radar is a [Nuxt 3](https://nuxt.com/) application (Vue 3, [Nuxt Content](https://content.nuxt.com/), Tailwind CSS), rendered as a static site. All its content is based on simple text files (`.yaml` format) located within this repository, which is converted into simple HTML files during the build process. The application is built by [GitHub Actions](https://docs.github.com/en/actions) and hosted on [GitHub Pages](https://pages.github.com/).

### Structure

The main items in the Radar are: the **Timeline**, the **Events**, and the **Milestones**:

<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117249238-8ad11e80-ae41-11eb-9712-14767b29e3f2.png" width="800"/></p>

- **Timeline**: shows the whole semester at a glance; divided in weeks, gives an overview of events and milestones each week
- **Events**: weekly events happening throughout the semester; each event can have resources attached to it (meeting room link, slides, event recordings, etc)
- **Milestones**: are deadlines for the students throughout the semester; they can include to-dos that the student has to complete by a certain date

All Events and Milestones have their own pages, accessible by either clicking on their titles or on their names within the Timeline. This allows for sending out links to specific events and milestones to the students, when necessary.

Additionally, there are also other secondary pages displayed when clicking on the hamburger menu on top right: **FAQ**, **Media**, and **Newsletter**.

---

# Reference

Everything below is the detailed reference for configuring the Radar and writing its content.

## Configuration reference

These are the main parts that need to be configured/modified:

### Title and location badge

<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117254654-eeab1580-ae48-11eb-80ac-c91dc99117df.png" width="600"/></p>

The title which appears on the browser title window can be changed in `nuxt.config.ts`, under `app.head.titleTemplate`. The term name, appearing on the top of the page, can be edited in the file `content-bln/term.yaml`.

The location this Radar is built for (which `content-<location>/` folder is used) is set in `radar.config.ts`.

The badge next to the term name is `public/icon-<location>.png` (for example `public/icon-bln.png`); replace it with the badge of your location. Ready-made badges for other TechLabs locations are in `public/location-badges/`.

### Navigation menu and social icons

<p align="center"><img src="https://user-images.githubusercontent.com/5139870/117255002-6da04e00-ae49-11eb-9c9a-1c9871daf4e9.png" width="600"/></p>

The top menu (hamburger) is composed of internal links to other pages and social icons leading to our social media pages.

- Internal links: you can modify the links in the file `content-bln/nav-links.yaml`
- Social links: you can modify the links in the file `content-bln/social-links.yaml`

### Newsletter

We use a personalized AWS Lambda function endpoint in our newsletter form, connected to our Mailchimp account. You'll need to create your own, and change the endpoint in `components/MailchimpForm.vue`.

### Footer

The footer contents can be changed in the file `content-bln/footer.md`.

### Blog posts

The home page shows the latest posts of an RSS 2.0 feed under the events. Set `RSS_FEED_URL` and `RSS_ITEM_COUNT` in `radar.config.ts` (the default is the last 5 posts of `https://blog.bifunctional.xyz/rss.xml`). The feed is read when the site is built, so the posts update on the next build. Set `RSS_FEED_URL` to `''` to hide the section. If the feed cannot be read, the build still succeeds and the section is left out.

## Content

All content in the Radar is written on YAML files. YAML (a recursive acronym for "YAML Ain't Markup Language") is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. In simple terms, it is a text file that allows structure data.

The content files are located in the folder `/content-bln`. You can edit any of these files and see the changes in real time in your local dev environment. To publish content changes, you'd have to simply `git commit` and `git push` to your repo, so that the action to rebuild and redeploying the content is fired.

There are three main pieces of content you'll be working with: the Timeline, the Events, and the Milestones.

### Timeline

By editing the file `/content-bln/timeline.yaml`, you define the main **sections** within the timeline. The weeks in each section are populated automatically from the start and end dates. The file is a collection of items under `timeline:`, which contain the following properties:

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

Inside the `/content-bln/events` folder, you'll find files to all the events in the semester. Each file contain the following properties:

| property        | description                                                                                                                    | example                     | required | type       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | -------- | ---------- |
| `title`         | the event title                                                                                                                | Welcome Event ST21          | yes      | `string`   |
| `date`          | time and date of the event, including timezone                                                                                 | `2021-03-16T19:30:00+02:00` | yes      | `datetime` |
| `description`   | the event's description (accepts Markdown)                                                                                     | (see below)                 | yes      | `string`   |
| `showResources` | use in case you want the listing to display the items in `resources` before the event                                          | `true`                      | no       | `boolean`  |
| `is_public`     | set to `true` to show the event in the reduced public version of the Radar (see the developer notes)                           | `true`                      | no       | `boolean`  |
| `meetings`      | where you place the video links for the meetings; these are going to appear on the event card 60 minutes before the event time | (see below)                 | no       | `array`    |
| `forms`         | list of forms (like feedback forms)                                                                                            | (see below)                 | no       | `array`    |
| `resources`     | list of any other resources (slides, recording, links, etc)                                                                    | (see below)                 | no       | `array`    |

Each of the items in `meetings`, `forms`, and `resources` should follow the same structure:

| property      | description                              | example                                | required | type                                                             |
| ------------- | ---------------------------------------- | -------------------------------------- | -------- | ---------------------------------------------------------------- |
| `title`       | the name of the item                     | Meet: Kick-Off                         | yes      | `string`                                                         |
| `description` | item's description                       | The main room where we will meet.      | no       | `string`                                                         |
| `type`        | item's type (defines which icon to show) | `meeting`                              | yes      | `meeting`,`link`,`slides`,`form`,`video`,`tool`,`game`,`nothing` |
| `url`         | the link the item opens                  | `https://meet.google.com/abc-defg-hij` | yes      | `string`                                                         |

In case `meetings`, `forms`, or `resources` are empty, you should set their values to `[]`

### Milestones

Inside the `/content-bln/milestones` folder you'll find the deadlines of the semester, one file per milestone. The file name becomes the link (for example `50-checkpoint.yaml` is `/milestone/50-checkpoint`). Each file contains the following properties:

| property      | description                                                                                              | example                     | required | type       |
| ------------- | -------------------------------------------------------------------------------------------------------- | --------------------------- | -------- | ---------- |
| `title`       | the milestone title                                                                                      | 50% Checkpoint              | yes      | `string`   |
| `deadline`    | date and time of the deadline, including timezone                                                        | `2021-04-25T22:59:59+02:00` | yes      | `datetime` |
| `type`        | `cutoff` shows a warning icon for hard deadlines; any other value, like `checkpoint`, shows a check mark | `checkpoint`                | yes      | `string`   |
| `description` | the milestone's description (accepts Markdown)                                                           | (see below)                 | yes      | `string`   |
| `todos`       | the tasks students have to complete by the deadline; use `[]` if there are none                          | (see below)                 | no       | `array`    |

Each to-do has a `name` and, optionally, a list of `resources`. Resources have the same properties as the items of an event (`title`, `type`, `url`, and optionally `description`).

```yaml
title: Project Pitch Submission
deadline: 2021-04-25T23:59:00+02:00
type: checkpoint
description: |
  Submit your project pitch until the end of Sunday.

todos:
  - name: Submit your pitch
    resources:
      - title: Pitch form
        type: form
        description: Use this form to submit your pitch
        url: https://example.com/pitch-form
```

The next upcoming milestone is shown above the events, and all milestones appear in the Timeline.

## All commands

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate the static site into .output/public
$ npm run generate

# preview the generated site locally
$ npm run preview

# lint and test
$ npm run lint
$ npm test
```

For detailed explanation on how things work, check out the [Nuxt docs](https://nuxt.com/docs).

## Developer notes

- The content is defined as [Nuxt Content collections](https://content.nuxt.com/docs/collections/define) in `content.config.ts`. The schemas there list the properties each YAML file may use, so when you add a new property to the content, add it to the schema too.
- The YAML files start with a `---` line. A small hook in `nuxt.config.ts` strips it before Nuxt Content parses the file, so you don't need to remove it.
- Events and milestones are prerendered from the file names in `content-bln/events` and `content-bln/milestones`.
- Set `SCOPE=public` when generating to build the reduced public version: no timeline, no milestones, and only the events and navigation or social links marked `is_public: true`. If no link is marked as public the menu is hidden completely.
- Broken content fails the build. Every YAML file is checked against the schema in `content.config.ts` before it is parsed (valid YAML, required properties, property types), and `npm run generate` stops with an error naming the file and the problem. The CI workflow runs this on every pull request, so a broken edit made on GitHub is caught before it can be deployed.
- Dates and times are shown in the time zone of the visitor and say which one it is (for example `7:30 p.m. CET`), so they are only rendered in the browser.
- Optional password: set `ACCESS_PASSWORD` when generating (for example as a GitHub Actions secret) and visitors are asked for it before they see anything. This only keeps casual visitors away, for example people who only have a link from marketing material. It is **not real protection**: only a hash of the password is in the site, but the content is public in this repository and in the generated static files. Anything that really is confidential, like meeting passwords, should not be in the content at all. Without `ACCESS_PASSWORD` there is no password.
- The generated site contains a `.nojekyll` file, so GitHub Pages serves the `_nuxt` folder.
