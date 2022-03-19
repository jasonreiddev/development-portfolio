<!--
    For better readability, use markdown preview.
    Windows VS Code: Ctrl + Shift + V
    Windows Atom: Ctrl + Shift + M
-->

<p align="center">
  <a href="https://jasonreid.dev">
    <img alt="jasonreid.dev logo" src="./images/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Next.js Monorepo by Jason Reid
</h1>
<div align="center">
  <a href="https://github.com/jasonreiddev/nextjs/stargazers">
    <img src="https://img.shields.io/github/stars/jasonreiddev/nextjs" alt="Stars">
  </a>
  <a href="https://github.com/jasonreiddev/nextjs/issues">
    <img src="https://img.shields.io/github/issues/jasonreiddev/nextjs" alt="Issues">
  </a>
  <a href="https://github.com/jasonreiddev/nextjs/network/members">
    <img src="https://img.shields.io/github/forks/jasonreiddev/nextjs" alt="Forks">
  </a>
  </div>
<br>

## Getting Started

All commands in this readme should be executed from the root folder of this repository.

### Install packages:

`yarn`

## Component Library

### Run storybook:

`yarn cl`

### Other Commands:

`yarn cl:lint` - performs lint check on the project.

`yarn cl:build` - creates static storybook build.

`yarn cl:serve` - serves static storybook build.

<code>yarn workspace component-library <span title="placeholder">...</span></code> - run yarn commands in the workspace (i.e. adding packages.)

`cd projects/component-library` - change terminal directory to the workspace.

## Portfolio

### Setup Environment variables:

Copy '.env.example' and rename it to '.env.local', use this new file as a template for copying environment variables from Vercel to use locally.

### Start development server:

`yarn pf`

### Deploy to Vercel:

<code>yarn vercel <span title="optional">--prod</span></code>

### Other Commands:

`yarn pf:lint` - performs lint check on the project.

`yarn pf:build` - builds the app for production.

`yarn pf:serve` - runs the built app in production mode.

<code>yarn workspace portfolio <span title="placeholder">...</span></code> - run yarn commands in the workspace (i.e. adding packages.)

`cd projects/portfolio` - change terminal directory to the workspace.

## Sanity

### Start development server:

`yarn sn`

### Deploy Sanity:

<code>yarn sn:deploy></code>

### Other Commands:

`yarn sn:lint` - performs lint check on the project.

`cd projects/sanity` - change terminal directory to the workspace.

## Add Project

`cd projects` - change terminal directory to the projects folder.

<code>yarn create <span title="placeholder">project-name</span> <span title="optional">--typescript</span></code> - create new project.

In the the package.json set the packageManager to match the root package.json i.e "yarn@3.2.0".

If eslint / eslint-config-next packages are added in the new package.json, these will need to be removed.

### Using components from other projects:

<code>yarn workspace <span title="placeholder">project-name</span> add tsconfig-paths-webpack-plugin</code> - add next-transpile-modules package.

In <span title="placeholder">project-name</span>/next.js.config import next-transpile-modules and specify packages to transpile, then change the export to use the withTM method. e.g.:

<div class="codeblock">
const withTM = require(next-transpile-modules)([component-library<span title="optional">, <span title="placeholder">project-name</span></span>]);

module.exports = withTM(nextConfig);

Add a .babelrc file to the workspace with the presents set to "next/babel", and add the following plugin option for styled components: ["styled-components", { "ssr": true }]

</div>

### Please add scripts to the root package.json and update the readme, following the same structure as the Portfolio and Component Library sections.

## Other Other Commands

`yarn lint` - performs lint checks on all projects.

`yarn lint-parallel` - faster but less readable.

<br/>

 <style>
   Markdown viewer has stripped style tags
    <!--
    a:hover {
        text-decoration: none;
    }
    code, .codeblock {
        color: orange;
        border: 1px solid grey;
        padding: 0 1em;
    }
    .codeblock {
        display: inline-block;
        margin-bottom: 1em;
    }
    span[title="placeholder"] {
        color: grey;  
    }
    span[title="optional"] {
        color: lightblue;  
        text-decoration: underline;
    }
    -->
</style>
