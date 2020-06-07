# create-some-app

> 👩‍💻🚀👨‍💻 A configurable CLI-based scaffolder that creates some app!

[![Node Version](https://img.shields.io/badge/node-v12.14.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.14.0) [![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/create-some-app/blob/master/LICENSE)

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

When passed, `git init` will be run, initialising a `git` repo with all files unstaged. Default is `false`.

    create-some-app fullstack-next-sanity --yes --git
    create-some-app fullstack-next-sanity -y -g

#### 4. `--install` or `-i`

When passed, `npm install` will be run, initialising all dependencies specified in the chosen / tailored `package.json` file.

    create-some-app fullstack-next-sanity --yes --git --install
    create-some-app fullstack-next-sanity -y -g -i

#### 5. `--gatsbyDefaultEnvironment`

    create-some-app --gatsbyDefaultEnvironment production

#### 6. `--nodeVersion`

    create-some-app --nodeVersion 12.18.0

#### 7. `--ownersName`

    create-some-app --ownersName 'Owner Inc.'

#### 8. `--projectName`

    create-some-app --projectName 'Nice Project Name'

#### 9. `--projectDescription`

    create-some-app --projectDescription 'Such Wow Description'

#### 10. `--repoOwner`

    create-some-app --repoOwner dreamyguy

#### 11. `--sanityAuthToken`

    create-some-app --sanityAuthToken lkasjflkjasldfjlkajsdkfjlkajsdfkljsalkjdfsomethingsomething

#### 12. `--sanityProjectId`

    create-some-app --sanityProjectId 701kayak107

#### 13. `--sanityDataset`

    create-some-app --sanityDataset production

#### 14. `--siteUrl`

    create-some-app --siteUrl http://thisistheurl.io

Using the full potential of the CLI, with all options, without even installing it first (using `npx`):

    npx create-some-app fullstack-gatsby-sanity --gatsbyDefaultEnvironment envelope --nodeVersion 12.18.0 --ownersName 'Owner Inc.' --projectName 'Naming Names in the Name' --projectDescription 'Such Wow Description' --repoOwner 'Dreamyguy' --sanityAuthToken lkasjflkjasldfjlkajsdkfjlkajsdfkljsalkjdfsomethingsomething --sanityDataset produccione --sanityProjectId 701kayak107 --siteUrl http://thisistheurl.io --yes --git --install

## What kind of apps are available?

_Currently only two_: **Fullstack Gatsby Sanity** and **Fullstack Next Sanity**. _None of them are fully functional at the moment. The project is in ALPHA (work in progress)._

Watch this space for highly configurable starters with **React**, **Sanity**, **Gatsby**, **NextJs**, **Bit** integration, extensive testing and many other goodies, all bundlet as options within **create-some-app**.

## Extended DOCS

- [TESTING](docs/TESTING.md)
- [TODO](docs/TODO.md)
- [IDEAS](docs/IDEAS.md)

## License

[MIT](LICENSE)

## Credits

**create-some-app** is heavily based on / inspired by the awesome work of:

- Dominik Kundel 🇺🇲 - [@dkundel](https://github.com/dkundel) - [create-project](https://github.com/dkundel/create-project)
- Nader Dabit 🇺🇲 - [@dabit3](https://github.com/dabit3) - [create-new-cli](https://www.npmjs.com/package/create-new-cli)

_More to come!_

## About

**Create Some App** was put together by [Wallace Sidhrée](https://github.com/dreamyguy). 👨‍💻🇳🇴
