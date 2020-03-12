# myextension

![Github Actions Status](https://github.com/my_name/myextension/workflows/Build/badge.svg)

A JupyterLab extension.


## Requirements

* JupyterLab >= 1.0

## Install

```bash to be run in the parent directory of the extensions folder
jupyter labextension install myextension
```

### Terminal setup
conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c anaconda jupyterlab cookiecutter nodejs git
conda activate myextension (need to be run every new terminal)

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to myextension directory
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Execution
go to http://localhost:8888/lab
go to commands tab on the left panel and search for "weather finder"
a left panel will be added for the new extension for "weather finder" click on it to run task 2

move to python directory inside myextension and execute run.ipynb to run task 3.

### Uninstall

```bash
jupyter labextension uninstall myextension
```