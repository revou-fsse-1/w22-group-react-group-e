# Website API - Group Project Team E - Wareg

This is our assignment for Week 23

## Table of Content

- [About the Project](#about-the-project)
  - [Team](#Team)
  - [Links](#Links)
  - [Features](#Features)
  - [Api Endpoint](#api-endpoints)
  - [API Documentation](#API-Documentation)
- [Our process](#Our-process)
  - [Database Diagram](#database-diagram)
  - [Architecture Diagram](#architecture-diagram)
  - [Tech Stack](#tech-stack)
  - [What We learned](#what-we-learned)
  - [What to improve](#what-to-improve)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Important Scripts](#important-scripts)
- [Author](#author)

## About the Project

![](https://res.cloudinary.com/djudfrj8s/image/upload/v1674663594/Wareg-Hero-Section_n91uag.png)

**About 'Wareg': Bringing Convenient, Healthy Meals to Modern Society**  
In today's fast-paced world, finding time for nutritious home-cooked meals can be challenging. "Wareg" is our solution: providing varied, healthy, and easy-to-access meals delivered right to your doorstep. We collaborate with nutritionists, use fresh local ingredients, and offer diverse menus, ensuring your meals are not just food, but a convenient and healthy lifestyle solution. Experience our service and feel the difference.

### Team

| Name         | Role                                 |
| :----------- | :----------------------------------- |
| Okky Anggoro | Lead Frontend Developer & UI UX           |
| Mesel Ghea   | Frontend Developer & Backend Developer |
| Nofrialdi    | Frontend Developer & Infra Engineer |

### Links
 **Live:**


  - <http://api.wareg.site>
  - <https://w17-our-backend-group-e-production-57d7.up.railway.app/>
  - <https://our-backend-warteg.nofri.xyz/>
 

**Docker:**

  - <https://hub.docker.com/r/nofrialdi/our-backend-warteg/tags>
  - <https://asia-southeast2-docker.pkg.dev/our-backend-warteg/docker/our-backend-warteg>

 **Repo :** <https://github.com/revou-fsse-1/w17-our-backend-group-e>

 **Status :** <https://our-backend-group-e.betteruptime.com/>




### Tech Stack

The table below gives an overview of the technologies used in this project, as well as places to learn more about them.

| Name            | Links                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Next.js         | [Website](https://nextjs.org/) - [Docs](https://nextjs.org/docs) - [Learn Next.js](https://nextjs.org/learn) - [GitHub](https://github.com/vercel/next.js) - [Wikipedia](https://en.wikipedia.org/wiki/Next.js) |
| React           | [Website](https://reactjs.org/) - [Docs](https://reactjs.org/docs/getting-started.html) - [GitHub](https://github.com/facebook/react) - [Wikipedia](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>) |
| TypeScript      | [Website](https://www.typescriptlang.org/) - [Docs](https://www.typescriptlang.org/docs/) - [GitHub](https://github.com/microsoft/TypeScript) - [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)           |
| Tailwind CSS    | [Website](https://tailwindcss.com/) - [Docs](https://tailwindcss.com/docs) - [GitHub](https://github.com/tailwindlabs/tailwindcss)   [Docs](https://tanstack.com/query/latest/docs/react/overview) - [GitHub](https://github.com/tanstack/query)                                                      |
| React Icons     | [Website](https://react-icons.github.io/react-icons/) - [GitHub](https://github.com/react-icons/react-icons)                                                                                                    |
| ESLint          | [Website](https://eslint.org/) - [Configuration](https://eslint.org/docs/user-guide/configuring/) - [Rules](https://eslint.org/docs/rules/) - [GitHub](https://github.com/eslint/eslint)                        |
| Prettier        | [Website](https://prettier.io/) - [Docs](https://prettier.io/docs/en/index.html) - [Options](https://prettier.io/docs/en/options.html) - [GitHub](https://github.com/prettier/prettier)                         |
| Husky           | [Website](https://typicode.github.io/husky/) - [Docs](https://typicode.github.io/husky/) - [GitHub](https://github.com/typicode/husky)                                                                          |
| lint-staged     | [Website](https://github.com/okonet/lint-staged) - [GitHub](https://github.com/okonet/lint-staged)                                                                                                              |
| pnpm            | [Website](https://pnpm.io/) - [Docs](https://pnpm.io/motivation) - [GitHub](https://github.com/pnpm/pnpm)                                                                                                       |
| GitHub Actions  | [Website](https://github.com/features/actions) - [Docs](https://docs.github.com/en/actions) - [Workflow syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)                |
| Vercel          | [Website](https://vercel.com/) - [Docs](https://vercel.com/docs) - [CLI Docs](https://vercel.com/docs/cli)                                                                                                      |


To get started, run:

```bash
pnpm dev
```

## Scripts

The table below provides names and descriptions of the npm scripts available in this project.

Each script is run using `pnpm <script-name>`. For example: `pnpm dev`.

| Name            | Description                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prepare`       | The [`prepare` life cycle script](https://docs.npmjs.com/cli/v7/using-npm/scripts#life-cycle-scripts) is used to set up Git pre-commit hooks when people install dependencies, eg. using `npm install`. This script should not be run manually. |
| `test`          | Runs tests                                                                                                                                                                                                                                      |
| `dev`           | Runs the Next.js development server.                                                                                                                                                                                                            |
| `build`         | Generates a production build.                                                                                                                                                                                                                   |
| `start`         | Runs the Next.js production server built using `build` script.                                                                                                                                                                                  |
| `lint`          | Runs [ESLint](https://eslint.org/) to catch linting errors in the source code.                                                                                                                                                                  |
| `format`        | Formats all source code in the project.                                                                                                                                                                                                         |
| `format:check`  | Checks the formatting of all code in the project.                                                                                                                                                                                               |
| `deploy:vercel` | Deploy a preview deployment to Vercel                                                                                                                                                                                                           |

