# Contributing to the Radar

Thanks for wanting to help! The Radar is a small project and every kind of contribution is welcome: fixing a typo, improving the docs, adding a feature, trying it for your own program and telling us what was confusing.

You don't have to ask before you start. For anything bigger than a small fix, it helps to open an issue or a [discussion](https://github.com/TechLabs-Berlin/radar/discussions) first so we can agree on the direction.

## Where to start

- Issues labelled [`good first issue`](https://github.com/TechLabs-Berlin/radar/labels/good%20first%20issue) are small and well suited for a first contribution.
- Issues labelled [`help wanted`](https://github.com/TechLabs-Berlin/radar/labels/help%20wanted) are bigger things where we'd love a hand.
- Found something confusing in the README? Please fix it. That is one of the most useful contributions.

## Set up

You need Git and the Node.js version in `.nvmrc` (currently 24; with [nvm](https://github.com/nvm-sh/nvm) run `nvm use`).

```bash
git clone https://github.com/TechLabs-Berlin/radar.git
cd radar
nvm use
npm install
npm run dev     # http://localhost:3000
```

The README explains the [content files](README.md#content) and [configuration](README.md#configuration-reference).

## Before you open a pull request

```bash
npm run lint       # ESLint, Prettier and Stylelint
npm test           # unit tests
npm run generate   # builds the whole site, also checks all content files
```

The same three steps run as a check on every pull request, so you will see quickly if something needs fixing. `npm run generate` fails with the file name and the problem if a content file is broken.

## Pull requests

- Keep them small and focused: one change per pull request is easier to review.
- Explain what changed and why. Link the issue it solves, for example `Closes #123`.
- Content changes (events, milestones, FAQ, ...) are welcome too and follow the same flow: edit the YAML file, open a pull request, check that the CI check passes.
- Contributors are credited: if your commit or idea ends up in a different commit, we add you as co-author.

## Code style

- Formatting is handled by Prettier, and ESLint and Stylelint check the rest. Most findings can be fixed automatically with `npx eslint . --fix` and `npx stylelint "**/*.{vue,css,scss}" --fix`.
- Components are Vue 3 single-file components. Data comes from [Nuxt Content](https://content.nuxt.com/) collections defined in `content.config.ts`, and every property used in the content must be in the schema there.
- Keep dependencies to a minimum. If you add one, say why in the pull request.

## Be kind

Be welcoming and patient, especially with people who are new to open source or to the tools used here. If something feels off, tell a maintainer.
