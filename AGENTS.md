# AGENTS.md

Operating principles for anyone working on the Radar, people and AI coding agents alike. Humans: [CONTRIBUTING.md](CONTRIBUTING.md) and the [README](README.md) are the friendlier starting points; this file is the short version of how we work, written so an agent can follow it.

## What this project is

The Radar is the semester timeline of TechLabs Berlin: events, milestones and deadlines on one page. It is a **static [Nuxt 3](https://nuxt.com/) site** (Vue 3, [Nuxt Content](https://content.nuxt.com/) v3, Tailwind CSS 3, Vitest). All content is YAML and Markdown in `content-bln/`, there is no server or database, and it is published with GitHub Pages. TechLabs Berlin is a **non-profit community**, and this repository is meant to be easy for other programs to reuse.

## Commands

Use the Node version in `.nvmrc` (24).

```bash
npm install
npm run dev        # http://localhost:3000, content edits reload live
npm run lint       # ESLint + Prettier + Stylelint
npm test           # Vitest
npm run generate   # builds the whole static site into .output/public and validates all content
npm run preview    # serve the generated site
```

Before opening a pull request, `npm run lint`, `npm test` and `npm run generate` must pass. They run again as the **CI** check on every pull request.

## Where things live

| Path                                           | What it is                                                                                                                          |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `content-bln/`                                 | all content: `term`, `timeline`, `events/`, `milestones/`, `faq`, `media`, `announcement`, `nav-links`, `social-links`, `footer.md` |
| `content.config.ts`                            | the schemas of the content. A new property in a YAML file must be added here                                                        |
| `modules/content-yaml.ts`                      | validates every YAML file before parsing and **fails the build** with the file name and the problem                                 |
| `radar.config.ts`                              | the location code (which `content-<code>/` folder and `public/icon-<code>.png` to use)                                              |
| `nuxt.config.ts`                               | config, prerendered routes, runtime config (`SCOPE`, `ACCESS_PASSWORD`)                                                             |
| `pages/`, `components/`, `layouts/`, `app.vue` | the UI (Vue 3 single-file components, plain JavaScript, Nuxt auto-imports)                                                          |
| `composables/`                                 | data access (`useRadarContent.js`), date helpers, the optional password gate                                                        |
| `test/`                                        | unit tests                                                                                                                          |
| `.github/workflows/`                           | CI and deployment, see below                                                                                                        |

## Conventions

- Prettier decides formatting (no semicolons, single quotes, `es5` trailing commas); ESLint and Stylelint check the rest. Fix with `npx eslint . --fix`.
- Markdown in the content is rendered with `$md.render()`. Event and milestone pages are named after their file (`kick-off.yaml` is `/event/kick-off`) and are prerendered from the file names.
- Times depend on the visitor's time zone, so they are rendered in the browser only. Dates in content need an offset, for example `2026-03-16T19:30:00+01:00`.
- Keep dependencies to a minimum and say why when you add one.
- Do not put secrets, meeting passwords or anything confidential in the content. `ACCESS_PASSWORD` is only a soft gate, the content stays public in the repository and in the generated files.

## How we work

- Small, focused pull requests. Explain what changed and why, link the issue (`Closes #123`), and say what you verified and what you could not.
- For UI changes, build the site and look at it in a browser. Passing tests are not enough.
- The repository merges with **merge commits**, so `Closes #N` in commit messages reaches `master`, and it deletes a pull request's branch after merging (stacked pull requests are retargeted automatically).
- Credit contributors: keep their commits, or add them as `Co-Authored-By`.
- Say when an agent prepared a change. The pull request description should state it.

## Agents

- The agent identity is the org-owned GitHub App **`techlabs-assistant`**, always **with human review by `@valiantone`**. It has read and write access to contents, issues and pull requests (read-only metadata) on this repository only, and no admin rights. It has no `workflows` permission, so changes to `.github/workflows/` have to be pushed by a person.
- Agents open pull requests; **a person reviews and merges them**. Do not merge your own pull request, enable auto-merge, or get around branch protection unless a maintainer explicitly tells you to in that moment.
- The app's private key lives in a maintainer's keychain, never in the repository, in an issue, or in a chat. Never print or log tokens.
- No destructive actions without being asked: no force-pushes, no deleting branches or files that are not yours, no closing other people's pull requests or issues.
- A maintainer decides first on: the license, repository settings and About text, deploy secrets, domains and DNS, branch protection, anything that publishes outside this repository, and anything that sends messages on behalf of the project.

## Be kind

This is a volunteer-run community project. Be welcoming and patient, especially with people who are new to open source or to the tools used here. Never turn a contributor away: thank them, explain plainly, and offer the next step. Keep issues, pull requests and messages in a warm, plain tone, and do not pressure anyone. When promoting the project, be open about who is posting and say what works today and what is still rough.

## Deployment

- **`ci.yml`**: on every pull request, installs, lints, tests and builds.
- **`deploy-bln.yml`**: on every push to `master`, builds the site and pushes `.output/public` to this repository's `deploy` branch, which GitHub Pages serves on the custom domain.
- **`deploy_external-bln.yml`**: the same with `SCOPE=public` (the reduced public version), pushed to the `deploy` branch of `TechLabs-Berlin/radar-external`. It needs the repository secret `PAT` to check out that repository.
- The optional repository secret `ACCESS_PASSWORD` turns on the password gate.
- Merging to `master` publishes. After a merge, check that the deploy workflows succeeded in the Actions tab and that the live site works, and tell a maintainer if not. Deployment problems and the launch checklist are tracked in [#83](https://github.com/TechLabs-Berlin/radar/issues/83).
