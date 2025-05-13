# GitHub Cloner CLI

A simple CLI tool to clone multiple GitHub repositories at once using a GitHub username. Select the repositories you want to clone, and the tool will download them into your specified directory.

## Installation

### Global Installation (via npm)
You can install this tool globally using npm:

```bash
npm install -g github-cloner-cli
````

### Usage

After installation, you can run the command `gclone` from your terminal.

```bash
gclone
```

Follow the prompts:

1. Enter a **GitHub username**.
2. Select the repositories you want to clone.
3. Provide the **directory** where you want the repositories to be cloned.

The tool will then clone the selected repositories into the specified directory.

## Features

* Clone multiple GitHub repositories at once.
* Select repositories via a simple CLI interface.
* Choose where to clone the repositories.

## Requirements

* **Node.js**: 12.x or higher (since this tool uses ES modules).
* **Git**: Must be installed on your machine for cloning repositories.

## How It Works

1. **GitHub API**: Fetches a list of repositories for the provided GitHub username.
2. **Inquirer.js**: Interactive prompts to select the repositories and specify the target directory.
3. **Simple-Git**: Handles the actual cloning of the repositories.

## Example

```bash
$ gclone
Enter GitHub username: jishnu
Select repositories to clone:
  [ ] repo1
  [ ] repo2
  [ ] repo3
Enter full path to clone into: /path/to/clone/directory

Cloning repo1...
✔ Cloned repo1
Cloning repo2...
✔ Cloned repo2

✅ All selected repos cloned successfully.
```

## Contributing

Feel free to fork this repo and submit pull requests for any bugs or features you'd like to add. Contributions are always welcome!

### How to contribute:

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/j1znuneel/github-cloner-cli.git`
3. Create a new branch: `git checkout -b my-feature`
4. Make your changes and commit: `git commit -am 'Add new feature'`
5. Push to your fork: `git push origin my-feature`
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
