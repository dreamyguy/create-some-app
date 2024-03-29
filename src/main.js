import boxen from "boxen";
import chalk from "chalk";
import execa from "execa";
import fs from "fs";
import kebabCase from "just-kebab-case";
import Listr from "listr";
import ncp from "ncp";
import path from "path";
import { projectInstall } from "pkg-install";
import { promisify } from "util";
import shelljs from "shelljs";
import defaults from "./defaults";
import { version } from "../package.json";

export const getDefaultValue = (type) =>
  defaults.find((f) => f.name === type && f.default).default;
export const escapeAllSpaces = (str) => str.replace(/\s/g, "\\ ");
export const escapeRegex = (str) =>
  str.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, "\\$&");

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false, // don't overwrite anything
  });
}

async function replaceStrings(options) {
  const replaceDirectly = (de, type, mode) => {
    if (de.name === type && mode) {
      let strReplace = de.replace;
      let strInput = escapeRegex(options[type]);
      if (mode === "project-name-kebab") {
        strReplace = "<% replace with project name kebab-case %>";
        strInput = kebabCase(strInput);
      } else if (mode === "project-repo-full-url") {
        strReplace = "<% replace with project repo full url %>";
        strInput = escapeRegex(
          `http://github.com/${options.repoOwner}/${kebabCase(strInput)}`
        );
      } else if (mode === "project-repo-full-url-ssh") {
        strReplace = "<% replace with project repo full url ssh %>";
        strInput = escapeRegex(
          `git@github.com:${options.repoOwner}/${kebabCase(strInput)}.git`
        );
      } else if (mode === "create-some-app-version") {
        strReplace = "<% replace with create-some-app version %>";
        strInput = escapeRegex(`${version}`);
      }
      const cmd = `grep -rl --exclude-dir={node_modules,dist} --exclude=*.{lock,png,jpg,svg,woff} --exclude=package-lock.json "${strReplace}" . | xargs sed -i '' 's/${strReplace}/${strInput}/g'`;
      if (shelljs.exec(cmd).code !== 0) {
        shelljs.echo(`Error: Failed replaceStrings() for '${type}'`);
        shelljs.exit(1);
      }
      shelljs.exec(cmd);
    }
  };
  const replaceWithDefault = (de, type) => {
    if (de.name === type) {
      const strReplace = de.replace;
      let strInput = escapeRegex(options[de.name]);
      if (type === "repoOwner") {
        strInput = kebabCase(strInput);
      }
      const cmd = `grep -rl --exclude-dir={node_modules,dist} --exclude=*.{lock,png,jpg,svg,woff} --exclude=package-lock.json "${strReplace}" . | xargs sed -i '' 's/${strReplace}/${strInput}/g'`;
      if (shelljs.exec(cmd).code !== 0) {
        shelljs.echo(`Error: Failed replaceStrings() for '${type}'`);
        shelljs.exit(1);
      }
      shelljs.exec(cmd);
    }
  };
  defaults.map(async (def) => {
    replaceWithDefault(def, "gatsbyDefaultEnvironment");
    replaceWithDefault(def, "nodeVersion");
    replaceWithDefault(def, "ownersName");
    replaceWithDefault(def, "projectName");
    replaceWithDefault(def, "projectDescription");
    replaceWithDefault(def, "repoOwner");
    replaceWithDefault(def, "sanityAuthToken");
    replaceWithDefault(def, "sanityProjectId");
    replaceWithDefault(def, "sanityDataset");
    replaceWithDefault(def, "siteUrl");
    replaceDirectly(def, "projectName", "project-name-kebab");
    replaceDirectly(def, "projectName", "project-repo-full-url-ssh");
    replaceDirectly(def, "projectName", "create-some-app-version");
    return;
  });
  return;
}

async function initGit(options) {
  const result = await execa("git", ["init"], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize Git"));
  }
  return;
}

async function initSetup(options) {
  const result = await execa("npm", ["run", "setup"], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to run initial setup"));
  }
  return;
}

function welcome() {
  console.log(
    boxen(
      chalk.bold.rgb(
        255,
        216,
        0
      )(
        `👩‍💻 Create Some App 👨‍💻\n${chalk.reset.white(
          `v${version}\n\nA configurable CLI-based scaffolder\nthat creates some app`
        )}`
      ),
      {
        align: "center",
        borderColor: "yellow",
        borderStyle: "round",
        dimBorder: false,
        float: "center",
        margin: 1,
        padding: 1,
      }
    )
  );
}

export async function createSomeApp(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
    gatsbyDefaultEnvironment:
      options.gatsbyDefaultEnvironment ||
      getDefaultValue("gatsbyDefaultEnvironment"),
    nodeVersion: options.nodeVersion || getDefaultValue("nodeVersion"),
    ownersName: options.ownersName || getDefaultValue("ownersName"),
    projectName: options.projectName || getDefaultValue("projectName"),
    projectDescription:
      options.projectDescription || getDefaultValue("projectDescription"),
    repoOwner: options.repoOwner || getDefaultValue("repoOwner"),
    sanityAuthToken:
      options.sanityAuthToken || getDefaultValue("sanityAuthToken"),
    sanityProjectId:
      options.sanityProjectId || getDefaultValue("sanityProjectId"),
    sanityDataset: options.sanityDataset || getDefaultValue("sanityDataset"),
    siteUrl: options.siteUrl || getDefaultValue("siteUrl"),
  };

  const currentFileUrl = import.meta.url;
  const templateDir = path.resolve(
    decodeURI(new URL(currentFileUrl).pathname),
    "../../templates",
    kebabCase(options.template)
  );
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name", chalk.red.bold("ERROR"));
    process.exit(1);
  }
  // Show welcome message
  welcome();
  // Define tasks to be run
  const tasks = new Listr([
    {
      title: "Copy project files",
      task: () => copyTemplateFiles(options),
    },
    {
      title: "Replace strings",
      task: () => replaceStrings(options),
    },
    {
      title: `Initialize 'git'`,
      task: () => initGit(options),
      enabled: () => options.git,
    },
    {
      title: `Install dependencies`,
      task: () =>
        projectInstall({
          cwd: options.targetDirectory,
        }),
      skip: () =>
        !options.runInstall
          ? "Pass --install to automatically install dependencies"
          : undefined,
    },
    {
      title: `Run initial setup`,
      task: () => initSetup(options),
      enabled: () => options.runSetup,
      skip: () =>
        !options.runSetup
          ? "Pass --setup to automatically setup project at CLI level, or run 'npm run setup' after the CLI is done"
          : undefined,
    },
  ]);
  // Now that all tasks are defined, run 'em!
  await tasks.run();
  // We're done here
  console.error(chalk.rgb(86, 118, 64).bold("  ✔"), "Done!\n");
  // Make it a wrap
  return true;
}
