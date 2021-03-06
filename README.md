# learning-angular

Learning Angular (2/4)

## Prerequisites

```
nvm install 8.5.0
nvm alias default 8.5.0
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
ng serve --disable-host-check  --host $IP --port $PORT --public-host https://learning-angular-stormwild.c9users.io/
```

The `--public-host` and `--disable-host-check` arguments are needed to prevent zonejs localhost references and invalid host header errors.


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

## Notes

### Build Separate CSS Files

In dev environment styles are embedded on the page, but extracted in production.

Alternatively set the `--extract-css` argument to the `ng build`

### Dependent or Nested Components

Nested components need to be declared in the nearest parent module.

```
// app.module.ts
// CarPartsComponent is referenced from app.component template file

import { CarPartsComponent } from './car-parts.component';

@NgModule({
  declarations: [
    AppComponent, CarPartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### NgModel

Using ngModel for two-way data-binding requires the FormsModule.

```
// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  ...,
  imports: [
    BrowserModule, FormsModule
  ],
  ...
})
export class AppModule { }
```

Otherwise an error will be display:

```
Angular 2: Can't bind to 'ngModel' since it isn't a known property of 'input'
```

## References

- [Introducing Angular Modules - Root Module](https://johnpapa.net/introducing-angular-modules-root-module/)
- [Is it possible to build separate CSS file with angular-cli?](https://stackoverflow.com/questions/42370854/is-it-possible-to-build-separate-css-file-with-angular-cli)
- [Angular 2: Can't bind to 'ngModel' since it isn't a known property of 'input'](https://stackoverflow.com/questions/38880150/angular-2-cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input)

