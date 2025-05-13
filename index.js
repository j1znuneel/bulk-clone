#!/usr/bin/env node
import inquirer from 'inquirer';
import axios from 'axios';
import simpleGit from 'simple-git';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

(async () => {
  try {
    // Step 1: Get GitHub username
    const { username } = await inquirer.prompt({
      type: "input",
      name: "username",
      message: "Enter GitHub username:",
    });

    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repos = res.data;

    if (!repos.length) {
      console.log(chalk.red("No repositories found for this user."));
      return;
    }

    // Step 2: Select repos
    const { selectedRepos } = await inquirer.prompt({
      type: "checkbox",
      name: "selectedRepos",
      message: "Select repositories to clone:",
      choices: repos.map(repo => ({
        name: repo.name,
        value: repo.clone_url,
      })),
    });

    if (!selectedRepos.length) {
      console.log(chalk.yellow("No repositories selected."));
      return;
    }

    // Step 3: Choose directory
    const { directory } = await inquirer.prompt({
      type: "input",
      name: "directory",
      message: "Enter full path to clone into:",
      default: process.cwd(),
    });

    // Step 4: Clone selected repos
    const git = simpleGit();

    for (const repoUrl of selectedRepos) {
      const repoName = repoUrl.split("/").pop().replace(".git", "");
      const targetPath = path.join(directory, repoName);

      if (fs.existsSync(targetPath)) {
        console.log(chalk.yellow(`${repoName} already exists. Skipping...`));
        continue;
      }

      console.log(chalk.blue(`Cloning ${repoName}...`));
      await git.clone(repoUrl, targetPath);
      console.log(chalk.green(`✔ Cloned ${repoName}`));
    }

    console.log(chalk.green("\n✅ All selected repos cloned successfully."));
  } catch (err) {
    console.error(chalk.red("❌ Error:"), err.message);
  }
})();
