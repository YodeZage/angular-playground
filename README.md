<h1 align="center">Angular Playground</h1>

<p align="center">
  <i>
    Angular playground repository and installation guide
  </i>
</p>

<p align="center">
  The Angular playground is the project to test and learn Angular new features and design idea
</p>

<hr>

# Environment Setup

This project was generated with Angular CLI and currently running on version Angular version 13.2.5

## Pre-installation
- Install the newest LTS version of [Node.js](https://nodejs.org/en/), and it will include [Node Package Manager](https://docs.npmjs.com/getting-started) (the ```npm``` command)
- Install the newest version of [Git](https://git-scm.com/) (not the GitHub, but the Git version control system)
- Install your favorite IDE ([Visual Studio Code](https://code.visualstudio.com/) is recommended)

## Running On Local
1. Install the newest version of [Angular CLI](https://angular.io/cli) (globally), and it will include the ```ng``` command
  ```
  npm install -g @angular/cli
  ```

2. Clone this repository to your local workspace
  ```
  git clone https://github.com/YodeZage/angular-playground.git
  ```

3. Install all the dependents for this project
  ```
  npm install
  ```

4. Build this application and serve it locally
  ```
  ng serve
  ```
  In your browser, open http://localhost:4200/ to see the application



# Code Scaffolding

To get more help on the Angular or Angular CLI, please check out the [Angular Offcial](https://angular.io/) page.

## Generate New Component
Angular CLI can help us generate new component, directive, pipe, service, class, guard, interface, enum, module, and so on. For example, if we like to generate a new component named ***new-component***, we can use

  ```
  ng g c new-component
  ```

  For more detail and other generate command, please check out the [Angular CLI](https://angular.io/cli/generate) generate page.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help for Angular CLI
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
