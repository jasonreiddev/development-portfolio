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

<code>yarn workspace component-library <span title="placeholder">[...]</span></code> - run yarn commands in the workspace (i.e. adding packages.)

`cd projects/component-library` - change terminal directory to the workspace.

## Portfolio

### Start development server:

`yarn pf`

### Other Commands:

`yarn pf:lint` - performs lint check on the project.

`yarn pf:build` - builds the app for production.

`yarn pf:serve` - runs the built app in production mode.

<code>yarn workspace portfolio <span title="placeholder">[...]</span></code> - run yarn commands in the workspace (i.e. adding packages.)

`cd projects/portfolio` - change terminal directory to the workspace.

## Add Project

`cd projects` - change terminal directory to the workspace.

<code>yarn create <span title="placeholder">[project name]</span> --typescript</code> - create new project (TS flag is optional)

### Using components from other projects:

<code>yarn workspace <span title="placeholder">[project name]</span> add tsconfig-paths-webpack-plugin</code> - add next-transpile-modules package.

In <span title="placeholder">[project name]</span>/next.js.config import next-transpile-modules and specify packages to transpile, then change the export to use the withTM method. e.g.:

<div class="codeblock">
const withTM = require(next-transpile-modules)([component-library,<span title="placeholder">[project name]</span>]);

module.exports = withTM(nextConfig);

</div>

Please also add commands to the root package.json, and update the readme, following the same structure as the Portfolio and Component Library sections.

## Other Other Commands

`yarn lint` - performs lint checks on all projects.

`yarn lint-parallel` - faster but less readable.

<style>
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
</style>
