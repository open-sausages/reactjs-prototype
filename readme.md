# ReactJS Prototype

This is a bare bones prototype used to demonstrate some of the ideas we're putting forward around using ReactJS in the CMS.

## Dependency Injection with Bottle

This branch is a PoC for how depencency injection could work using [bottlejs](https://github.com/young-steveo/bottlejs).

The `common` directory represents common components (smart and dumb) available for use in the CMS and any thrid party ReactJS applications.

The `cms` directory represents the core SilverStripe CMS ReactJS aplication.

The `better-list` directory represents a third party module which makes a core SilverStripe UI component even better.

JavaScript dependencies and build tasks for common, cms, and better-list applications are managed at the root level, this is just for simplicity, they would be handled independently in real applications.

## Install

Only required if you want to hack around with the code.

- Get the dependencies with `npm install`
- Build your changes with `npm run build`

## Usage

Start a dev server from the root directory `php -S localhost:8000`
