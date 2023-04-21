# WordPress React Frontend Demo

Demo WordPress block plugin with react on the frontend.

This plugin demonstrates how to create WordPress block plugins with React on the frontend, including using WordPress-native components. It attempts to follow WordPress coding standards and conventions as much as possible. It uses a directory structure compatible with multiple blocks within the same plugin.

This is a demonstration plugin and is not intended for production use.

## Installation

### Method 1: Install on existing WordPress site
- Clone the repository into the wp-content/plugins directory.
- In the plugin directory, run ```npm run build```
- Activate the plugin

### Method 2: Run locally on Docker / Lando
- Install [Lando](https://lando.dev/)
- Clone the repository locally
- In the plugin directory, run ```npm run build```
- Run ```lando start```
- Browse to website indicated by Lando
- Login as user admin, password admin