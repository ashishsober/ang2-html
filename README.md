# Ang Html

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Important points 

* Bootstrap-----4.1.3---for the grid layout
* Created EC2 instance of Ubuntu 18.0 image.
* Only using SVG icons
* Using node version 9.5.0
* Using Angular Material for Form field
* Their are two type of forms :

    [Template-driven validation](https://angular.io/guide/form-validation#template-driven-validation)
    [Reactive form validation](https://angular.io/guide/form-validation#reactive-form-validation)

* Using [ngx-spinner](https://www.npmjs.com/package/ngx-spinner)

          Chosse the desired spinner -- https://napster2210.github.io/ngx-spinner/

* Using Carosel from mdbootstrap
           
           https://mdbootstrap.com/docs/angular/advanced/carousel/#caption
           https://www.npmjs.com/package/angular-bootstrap-md
           https://www.w3.org/Style/Examples/007/fonts.en.html

* To login from the terminal 
      
           ssh -i /Users/ashishgupta/Desktop/Vivek\ Sir/vrdNetworkKeyPair.pem ubuntu@ec2-3-16-206-69.us-east-2.compute.amazonaws.com

* To run the app from AWS instance,which is alredy running no need of running again

            sudo nohup http-server -p 80 &

            ps -ef to see the running port
