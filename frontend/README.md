# Frontend

This folder contains frontend-related project and libraries to EmpowerChain.

The entire frontend folder is set up as a Lerna monorepo so that code can be shared across different projects.

## Setup

Before you start working on any single project or library, run the following commands in the `frontend/` folder (here).
```shell
$ npm install
$ npx lerna bootstrap
```

When you have installed and bootstrapped the frontend you can go and start developing in any single project (without using `npm install`)

## Installing dependencies in a specific project

See: https://github.com/lerna/lerna/tree/main/libs/commands/add#readme