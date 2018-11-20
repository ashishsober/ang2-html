# AngHtml

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Important points 

* Bootstrap-----4.1.3
* Created EC2 instance of Ubuntu 18.0 image.
* Only using SVG icons
* using node version 9.5.0

* To login from the terminal 
      ssh -i /Users/ashishgupta/Desktop/Vivek\ Sir/vrdNetworkKeyPair.pem ubuntu@ec2-3-16-206-69.us-east-2.compute.amazonaws.com

* To run the app from AWS instance,which is alredy running no need of running again

            sudo nohup http-server -p 80 &
