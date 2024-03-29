# create-some-app

> 👩‍💻🚀👨‍💻 A configurable CLI-based scaffolder that creates some app!

[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/create-some-app/blob/master/LICENSE) [![GitHub release](https://img.shields.io/github/v/tag/dreamyguy/create-some-app.svg?sort=semver)](https://github.com/dreamyguy/create-some-app/releases) [![Node Version](https://img.shields.io/badge/node-v12.18.3-blue.svg)](https://github.com/nodejs/node/releases/tag/v12.18.3) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://gitHub.com/dreamyguy/create-some-app/graphs/commit-activity) [![GitHub contributors](https://img.shields.io/github/contributors/dreamyguy/create-some-app.svg)](https://gitHub.com/dreamyguy/create-some-app/graphs/contributors/) [![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/dreamyguy/create-some-app)

> 👉 _**The project is in ALPHA (work in progress)**_.

## Installation & Usage

Choose one of these methods:

1. `npm init some-app`
2. `npm init create-some-app`
3. `npx create-some-app`
4. `npm install -g create-some-app`

...and then you'll be able to use the `create-some-app` command.

## Using the CLI

    create-some-app

By default, when running `create-some-app` without any option or flag, **you'll be presented with prompts**, so you can tailor the application to your needs without being familiar with available options or flags.

But for those interested in automation or simply in saving time, there are some pre-defined CLI commandos at your disposal:

#### 1. The first config option is the _template/project_ type

Currently `fullstack-gatsby-sanity` or `fullstack-next-sanity`.

    create-some-app fullstack-next-sanity

#### 2. `--yes` or `-y`

When passed, prompts will be skipped. Useful when passing both choices and chosen flags, making the prompt unnecessary.

> 👉 Without defining the first config option (template choice), it will default to `Fullstack Gatsby Sanity`.

    create-some-app --yes
    create-some-app fullstack-gatsby-sanity -y

#### 3. `--git` or `-g`

When passed, `git init` will be run, initialising a `git` repo with all files unstaged.

    create-some-app fullstack-next-sanity --yes --git
    create-some-app fullstack-next-sanity -y -g

#### 4. `--install` or `-i`

When passed, `npm install` will be run, initialising all dependencies specified in `package.json` file for the chosen template/scaffold.

    create-some-app fullstack-next-sanity --yes --git --install
    create-some-app fullstack-next-sanity -y -g -i

#### 5. `--setup` or `-s`

When passed, `npm run setup` will be run. This command will:

- Install all dependencies, including those within `frontend` and `backend` folders
- Create `production` branch
- Set remote repo
- Add files
- Create the first **commit** and push to `production`
- Create `develop` branch and push to `develop`
- Create the first **tag** and push it

> 👉 It must be used combined with `--git` flag.

```
create-some-app fullstack-next-sanity --git --install --setup
create-some-app fullstack-next-sanity -g -i -s
```

#### 6. `--gatsbyDefaultEnvironment`

    create-some-app --gatsbyDefaultEnvironment production

> 👉 This will be added to `.envExample` files, that should be renamed to `.env` and **not committed/tracked by `git`**.

#### 7. `--nodeVersion`

    create-some-app --nodeVersion 12.18.0

This is meant as a way to both document _and_ require the `node` version used at the time of the install, so that contributors know which version they should use.

#### 8. `--ownersName`

    create-some-app --ownersName 'Owner Inc.'

Used at **LICENSE** and `package.json` level, for copyright purposes.

#### 9. `--projectName`

    create-some-app --projectName 'Nice Project Name'

This name will be injected in several places of the application, so it's important to get it right. It will be injected as/at:

- Repository's name
- `package.json` files
- README files
- Configuration files
- Github repo urls
- Travis build status urls
- Netlify urls
- Badges urls

If you pass `La la la` or `LaLaLa`, the project name will become `la-la-la` (because of the conversion to _kebak-case_), which is OK if that's what you want. If you use `Lalala` or `lalala` you'll get `lalala`. Keep it in mind when naming your project.

#### 10. `--projectDescription`

    create-some-app --projectDescription 'Such Wow Description'

#### 11. `--repoOwner`

    create-some-app --repoOwner dreamyguy

This name will be injected in several places of the application, so it's important to get it right. It will be injected at

- Github repo urls
- Travis build status urls
- Badges urls

If you pass `La la la` or `LaLaLa`, the repo owner's name will become `la-la-la` (because of the conversion to _kebak-case_), which is OK if that's what you want. Keep it in mind when naming the repo owner.

#### 12. `--sanityAuthToken`

    create-some-app --sanityAuthToken lkasjflkjasldfjlkajsdkfjlkajsdfkljsalkjdfsomethingsomething

> 👉 This will be added to `.envExample` files, that should be renamed to `.env` and **not committed/tracked by `git`**.

#### 13. `--sanityProjectId`

    create-some-app --sanityProjectId 701kayak107

> 👉 This will be added to `.envExample` files, that should be renamed to `.env` and **not committed/tracked by `git`**.

#### 14. `--sanityDataset`

    create-some-app --sanityDataset production

This will be added to the local **Netlify**'s config, which overrides their remote UI settings.

> 👉 This will also be added to `.envExample` files, that should be renamed to `.env` and **not committed/tracked by `git`**.

#### 15. `--siteUrl`

    create-some-app --siteUrl http://thisistheurl.io

Using the full potential of the CLI, with all options, without even installing it first (using `npx`):

    npx create-some-app fullstack-gatsby-sanity --gatsbyDefaultEnvironment envelope --nodeVersion 12.18.0 --ownersName 'Owner Inc.' --projectName 'Naming Names in the Name' --projectDescription 'Such Wow Description' --repoOwner 'Dreamyguy' --sanityAuthToken lkasjflkjasldfjlkajsdkfjlkajsdfkljsalkjdfsomethingsomething --sanityDataset produccione --sanityProjectId 701kayak107 --siteUrl http://thisistheurl.io --yes --git --install --setup

## What kind of apps are available?

- [Fullstack Gatsby Sanity](templates/fullstack-gatsby-sanity)
- [Fullstack Next Sanity](templates/fullstack-next-sanity)

> 👉 _None of them are fully functional at the moment. The project is in ALPHA (work in progress)._

Watch this space for highly configurable starters with **React**, **Sanity**, **Gatsby**, **NextJs**, **Bit** integration, extensive testing and many other goodies, all bundlet as options within **create-some-app**.

## Extended DOCS

- [DEPLOYMENT](docs/DEPLOYMENT.md)
- [TESTING](docs/TESTING.md)
- [TODO](docs/TODO.md)
- [IDEAS](docs/IDEAS.md)

## License

[MIT](LICENSE)

This package is [Treeware](https://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/dreamyguy/create-some-app) to thank us for our work. By contributing to the Treeware forest you'll be creating employment for local families and restoring wildlife habitats.

## Credits

**create-some-app** is heavily based on / inspired by the awesome work of:

- Dominik Kundel 🇺🇲 - [@dkundel](https://github.com/dkundel) - [create-project](https://github.com/dkundel/create-project)
- Nader Dabit 🇺🇲 - [@dabit3](https://github.com/dabit3) - [create-new-cli](https://www.npmjs.com/package/create-new-cli)

## About

**Create Some App** was put together by [Wallace Sidhrée](https://github.com/dreamyguy). 👨‍💻🇳🇴
