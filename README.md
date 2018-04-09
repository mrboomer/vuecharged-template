<h1 align="center">
  <img src="https://raw.githubusercontent.com/mrboomer/vuecharged-template/master/src/views/img/VueChargedLogo.png" alt="VueCharged Logo" width="256" />
  <br />
  VueCharged Template
  <br />
</h1>

<p align="center">
  An opinionated feature-first Vue 2.0 template with CLI scaffolding superpowers.
</p>

<div align="center">
  <!-- Build Status -->
  <a href="https://travis-ci.org/mrboomer/vuecharged-template">
    <img src="https://img.shields.io/travis/mrboomer/vuecharged-template/master.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/github/mrboomer/vuecharged-template?branch=master">
    <img src="https://img.shields.io/coveralls/github/mrboomer/vuecharged-template/master.svg" alt="Test Coverage" />
  </a>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/mrboomer/vuecharged-template">
    <img src="https://img.shields.io/david/mrboomer/vuecharged-template.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/mrboomer/vuecharged-template?type=dev">
    <img src="https://img.shields.io/david/dev/mrboomer/vuecharged-template.svg" alt="devDependency Status" />
  </a>
</div>

<br />

## Key Features

<dl>
  <dt>Features First!</dt>
  <dd>Each component created is its own application that functions in isolation.</dd>

  <dt>Scaffolding Superpowers</dt>
  <dd>Create components, views, and routes right from the CLI.</dd>

  <dt>Simple Request Routing</dt>
  <dd>Adding pages to your application has never been easier.</dd>

  <dt>Centralized State Management</dt>
  <dd>Keeping your state predictable the first time, every time.</dd>

  <dt>Internationalization Ready</dt>
  <dd>Your app is ready to speak to anyone around the world.</dd>

  <dt>Beautiful Stylesheets</dt>
  <dd>...using Sassy CSS. All properly formatted CSS is valid Sass!</dd>

  <dt>Live Development</dt>
  <dd>Lightning fast development changes after every save! No state loss either!</dd>

  <dt>Offline First</dt>
  <dd>Users can use your app in the middle of nowhere. No internet required!</dd>

  <dt>"Delightful" Testing</dt>
  <dd>As much as you don't want it, you need it. But it's all set up and ready for you.</dd>
</dl>


## VueCharged!

Guarantee component reusability with this feature first Vue template. Every component created is independently owned and operated. All of its logic, state, styles, and tests live together under one roof as one big happy family. Don't fret! You won't be concerning yourself with this structure at all, as this can all be generated automatically with a few keystrokes. You just worry about building the best app ever.


## Getting Started

It's as easy as 1, 2, 3.

### 1. Clone It

```sh
$ git clone https://github.com/mrboomer/vuecharged-template.git my-vuecharged-app
$ cd my-vuecharged-app
```

### 2. Install It

```sh
$ npm install
```

### 3. Develop It

```sh
$ npm start
```

## Deployment

Run the following command to build your project.

```sh
$ npm run build
```

All compiled files can be found in the `build` folder.


## Documentation

- [Introduction](#introduction)
- [Structure](#structure)
- [Generators](#generators)


## Introduction

This template is highly opinionated to help with scaling large apps and follow industry best practices. As people develop more, they find better ways to do certain things. This Vue template hopes to encapsulate some popular accepted ideas and patterns from the many who have found better ways of doing things.

This project is primarily built around:

- vue
- vuex
- vue-router


## Structure

All your developmental concerns should live in the `src` folder. Here is a high-level structure highlighting the parts that are important to you:

    .
    ├── src
    │   ├── components
    │   │   ├── container            # "how things work" components
    │   │   ├── presentational       # "how things look" components
    │   ├── helpers                  # app specific helper files
    │   ├── i18n                     # globally defined localization
    │   ├── router
    │   │   ├── routes.js            # add "view" routes here
    │   │   └── ...
    │   ├── static                   # static files/directories go here
    │   │   ├── manifest.json        # web app manifest (pwa)
    │   │   └── ...
    │   ├── store                    # global state goes here
    │   │   ├── index.js             # add store component modules here
    │   │   └── ...
    │   ├── views                    # "view" components
    │   ├── index.html               # add any global libraries/scripts here
    │   └── ...
    └── ...

### `./src/components`

The bulk of your work will reside here. The components folder is split up into two subfolders to help differentiate the type of component you write.

The `container` folder should contain components that are concerned with _how things work_.

The `presentational` folder should contain components that are concerned with _how things look_.

This is intentional to help separate the types of components that are created. For example, this should help with identifying components that have logic and state in them (containers), vs components that only render things like headers, footers, etc. (presentational).

I would encourage you to [read this article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) by Dan Abramov to help you better understand the distinction between container and presentational components.

You can automatically create container components from the command line by running `npm run generate container`, and create presentational components with `npm run generate presentational`.

### `./src/helpers`

Keep all of your app specific helper files here. This is where you add functions that help you solve specific tasks that are usually reoccurring.

### `./src/i18n`

Internationalization should always be supported in an app even if you're only using one language. You never want to find yourself reworking the whole app to support other languages. It’s always much easier if you do it right from the beginning. Luckily for you, this template has got you covered.

While this folder lets you set global translations, you should only use it as a fallback option. Just like each component carries its own logic, it should also carry its own translations.

### `./src/router/routes.js`

If you want a webpage that goes to `https://mywebsite.com/about`, this is where you create it. Basically, your "view" page routes should be added here.

You can automate this from the command line by running `npm run generate route`.

Routes can only be created from view components. See "./src/view" section below.

### `./src/static`

This is where you add individual files or entire directories that you want to be copied over to the build directory. Sometimes you have external assets that just need to be included in your app, so this is where you add them.

### `./src/static/manifest.json`

From [MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest):

> The purpose of the manifest is to install web applications to the homescreen of a device, providing users with quicker access and a richer experience.

> Web app manifests are part of a collection of web technologies called progressive web apps, which are web applications that can be installed to the homescreen of a device without needing the user to go through an app store, along with other capabilities such as  being available offline and receiving push notifications.

### `./src/store`

Our store is divided into modules per component. While you should keep all your logic encapsulated within each component, sometimes there exists a need for global state. This is where that logic should live.

### `./src/store/index.js`

Your component store modules need to be added to this file to be included into the store. This can be automatically done if you use the CLI generators to build your components.

### `./src/views`

Separating your components between container and presentational types is not enough. While it helps you quickly figure out what type of component it is, it doesn't tell you if it's connected to a route.

Think of these "view" components as webpage containers. They should contain a collection of container/presentational components, along with page layout elements to create its structure. This way you know which components belong to a certain page.

Limit the focus of these components to layout, high level page elements, text, and styles. The bulk of the view component's concern should just be including container/presentational components created in the `components` folder.

You can automatically create a view component and its route from the command line by running `npm run generate view`.

### `./src/index.html`

The entry point of our app. This is where you can add anything that needs to be globally included like tracking pixels, custom scripts, etc.

## Generators

Focus on writing code and automatically generate all your container/presentational components, views, and routes.

```sh
$ npm run generate
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
