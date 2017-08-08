
# Etech_Recruitment_angular

## Getting Started

To start project, clone this repo and run:

`npm install`

Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Devlopment Build

Run `ng build` or `ng build --dev` to build the project in development build, the api will be hit to development server. The build artifacts will be stored in the `dist/` directory.

## Production Build

Run `ng build --prod` to build the project in production build, the api will be hit to production/live server. The build artifacts will be stored in the `dist/` directory.

## Configuration Files

Configuration files for building application is located inside `src->environments` folder. There are two files present:
1. environment.prod.ts -> this file contents will used for production build environment. All the keys/value located in this file can only be accessed in prodcution build.
```
export const environment = {
    production: true,
    'apibase': 'http://5.9.144.226:8090/'
};
```
For production build `production` key value must be set to `true`.

2. environment.ts -> this file contents will used for development build environment. All the keys/value located in this file can only be accessed in development build. 
```
export const environment = {
    production: true,
    'apibase': 'http://5.9.144.226:8090/'
};
```
For developmet build `production` key value must be set to `false`.

You can add more keys/values as per your requirment.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

add "../node_modules/bootstrap/dist/css/bootstrap.min.css" in style of angular cli for bootstrap style



