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


* To login from the terminal 
      
           ssh -i /Users/ashishgupta/Desktop/Vivek\ Sir/vrdNetworkKeyPair.pem ubuntu@ec2-3-17-146-125.us-east-2.compute.amazonaws.com

* To run the app from AWS instance,which is alredy running no need of running again

            sudo nohup http-server -p 80 &

            ps -ef to see the running port

* To check the deployment bundle size

            https://angular.io/guide/deployment#fallback
            ng build --prod --source-map
            node_modules/.bin/source-map-explorer dist/main.*.js

#Important Links            
* https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8
* https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4
* https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
* http://jasonwatmore.com/post/2018/06/25/angular-6-communicating-between-components-with-observable-subject
* https://www.peerbits.com/blog/angular-7-features-and-updates.html

#Sorting Algorithm
* https://khan4019.github.io/front-end-Interview-Questions/sort.html

# HTML & CSS
* https://tutorialzine.com/2013/10/12-awesome-css3-features-you-can-finally-use