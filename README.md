# create-some-app

> 👩‍💻🚀👨‍💻 A configurable CLI to bootstrap some app!

## Installation & Usage

Choose one of these methods:

1. `npm init create-some-app`
2. `npx create-some-app`
3. `npm install -g create-some-app`

...and then you'll be able to use the `create-some-app` command.

## Using the CLI

    create-some-app

By default, when running `create-some-app` without any option or flag, **you'll be presented with prompts**, so you can tailor the application to your needs without being familiar with available options or flags.

But for those interested in automation or simply in saving time, there are some pre-defined CLI commandos at your disposal:

**1. The first config option is the _template/project_ type**

Currently `javascript` or `typescript`.

    create-some-app typescript

**2. `--yes` or `-y`**

When passed, prompts will be skipped. Useful when passing both choices and chosen flags, making the prompt unnecessary.

> 👉 Without defining the first config option (template choice), it will default to `JavaScript`.

    create-some-app --yes
    create-some-app javascript -y

**3. `--git` or `-g`**

When passed, `git init` will be run, initialising a `git` repo with all files unstaged. Default is `false`.

    create-some-app typescript --yes --git
    create-some-app typescript -y -g

**4. `--install` or `-i`**

When passed, `npm install` will be run, initialising all dependencies specified in the chosen / tailored `package.json` file.

    create-some-app typescript --yes --git --install
    create-some-app typescript -y -g -i

## What kind of apps are available?

_Currently only two_: **JavaScript** and **Typescript**. Both of them stripped to the very minimum.

But this is just the beginning. Watch this space for highly configurable starters with **React**, **Sanity**, **Gatsby**, **NextJs**, **Bit** integration, extensive testing and many other goodies, all bundlet as options within **created-some-app**.

## License

[MIT](LICENSE)

## Credits

**create-some-app** is heavily based on / inspired by the awesome work of:

- Dominik Kundel 🇺🇲 - [@dkundel](https://github.com/dkundel) - [create-project](https://github.com/dkundel/create-project)
- Nader Dabit 🇺🇲 - [@dabit3](https://github.com/dabit3) - [create-new-cli](https://www.npmjs.com/package/create-new-cli)

_More to come!_

## About

**Create Some App** was put together by [Wallace Sidhrée](https://github.com/dreamyguy). 👨‍💻🇳🇴
