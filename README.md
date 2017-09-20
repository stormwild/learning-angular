# learning-angular

Learning Angular (2/4)

## Prerequisites

```
nvm install 8.5.0
nvm alis default 8.5.0
```

- Node `v8.5.0`
- NPM `5.3.0`

## Setup

Initialize npm

```
npm init -y
```

Install angular

```
npm install -g @angular/cli
npm install --save-dev @angular/cli@latest
```

Create new app

```
ng new myapp --directory ./
```

Serve app

```
ng serve --host $IP --port $PORT
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



