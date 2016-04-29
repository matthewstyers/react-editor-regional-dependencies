# react-editor-regional-dependencies
host dependencies for running eslint in containerized, react-based projects

Helpful when:
- You're running an [integration-based instance of eslint](http://eslint.org/docs/user-guide/integrations), and
- Your host-based text editor doesn't have access to containerized `node_modules` directory, and/or
- You'd rather not bloat your containers with linter packages, because
- You'd link to do real-time or on-save linting without slowing down your build, and/or
- You're super tired of maintaining/updating `eslint` + it's smorgasbord of plugins for each of your projects, and/or, most importantly,
- **You've really started to question why you have `w linter instances + x plugins * y projects * z containers` packages that are all doing a pretty low-level task that can be readily handled by 1 text editor.**

## [Atom](https://atom.io) and [atom-linter-eslint](https://atom.io/packages/linter-eslint)-compatible installation instructions:

There are two ways to go about installation:

### 1. Use `react-editor-regional-dependencies` as a peer to your existing projects **(RECOMMENDED)**
```
|-node_modules // created by npm install
|-react-editor-regional-dependencies // this repo
|---package.json
|-child-project-a
|-child-project-b
|-child-project-c
```

To install:
- ```bash
git clone https://github.com/matthewstyers/react-editor-regional-dependencies.git react-projects
```
_Note that the preceding instruction will change the cloned project folder name to `react-projects`. You can make it anything you want or remove it entirely._
- ```bash
cd react-projects   # or whatever you named the folder
```
- ```bash
npm run install-gulp
```
_NPM lifecycle script that installs the packages necessary to handle the remainder of the install. If you're one of those people who has a thing with task-runners, you can accomplish the same task by running `export ORIGINAL_NPM_PREFIX_PATH=$(npm config get prefix) && NODE_ENV=production npm i -C $(pwd)/.. && npm config set prefix = $(ORIGINAL_NPM_PREFIX_PATH)` or `npm run install-to-parent`._
- ```bash
gulp   # or 'gulp install' if you enjoy typing more words.
```

### 2. Use `react-editor-regional-dependencies` as the parent folder for your eslint-based projects.
```
|-node_modules // created by npm install
|-react-editor-regional-dependencies // this repo
|-package.json
|---child-project-a
|---child-project-b
|---child-project-c
```

This method is a little easier to install and maintain, but has the side effect of adding a layer to your file structure and muddying an otherwise clean, subdirectory-only folder with unsightly individual files.

To install:
- ```bash
git clone https://github.com/matthewstyers/react-editor-regional-dependencies.git react-projects
```
_Note that the preceding instruction will change the cloned project folder name to `react-projects`. You can make it anything you want or remove it entirely if you think you're okay with all your projects being inside a parent directory that has a hideous name._
- ```bash
cd react-projects # or whatever you named the folder
```

- ```bash
npm install
```

If you installed using either of the methods above, your text editor-level dependencies will will now now encounter this `node_modules` directory on the project path.
