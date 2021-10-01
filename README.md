We were hoping that when we meet tomorrow we can work through an Angular solution together over zoom.

I don’t expect you to be able to build the application perfectly from scratch, but I am interested to see how you work with resources and ask questions to build the solution.

The time is relatively short so we will work on it together. It is important that you are able to work independently. I would expect you to use whatever resources you need.

The plan will be to build a simple application that will pull in a list of data from a service and display them in a sortable table.

Can you please make sure you have node, npm and angular-cli installed in advance.

The application will include a single route, component, service.
We can utilize angular material and use the mat-table component to display the data (https://material.angular.io/components/table/overview)

Here are some steps to get a project created in advance, please use which ever version of Angular that you feel most comfortable to use 

npm install -g angular-cli

ng new covidResults

ng add @angular/material

ng g service covid-data

ng g c LatestCovidResults

ng serve

The service that we would like you to load data from is available here:

https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST

You should be able to add a route to the project to display a simple sortable data table. If time permits we can look to include client-side filtering

Looking forward to chatting with you tomorrow, please let me know if you have any questions.

Thanks

==================================================================================================
# CovidResults

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
