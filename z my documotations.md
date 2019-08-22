├── angular.json 1
├── package.json 2
├── src
│   ├── index.html
│   ├── main.ts 3
│   ├── polyfills.ts 4 
│   ├── styles.css  
│   ├── tsconfig.app.json 5
│   └── tslint.json 6
├── tsconfig.json 
└── tslint.json 

1 This is the main configuration file for Angular, you need this to run the Angular CLI.
2 package.json is a configuration file that npm uses to install the required dependant libraries (These are libraries that you need in order to build your project, the 3code you need to deploy for your web app will be much smaller)
This is the file where all our code is going to go.
4 Polyfills to support older browsers
5 The CSS for this web application (we are using Bootstrap 4 Alpha Release)
A configuration file to tell TypeScript how to compile into JavaScript.
6 Configuration for the linter, so you can control what warnings you want to see when compiling.
7 A top level TypeScript configuration file (subfolders can override, like above)
8 A top level TypeScript linter file (subfolders can override, like above)




ng new mon-projet-angular --style=scss --skip-tests=true

npm install bootstrap@3.3.7 --save 



architect/build/options :
"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "styles.scss"
]


Créez un component

ng generate component mon-premier 


Delete the folder containing this component.
In the app.module.ts remove the import statement for this component and remove its name from the declaration section of @NgModule
Remove the line with the export statement for this component from index.ts.


sudo chmod -R ugo+rw yourFileName

RQ :

40 secon and will change to true 

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }


Change npm default caret(^) in package.json

npm config set save-prefix='~'
npm config set save-prefix='' will remove the auto-prefixing

or 
npm config set save-exact true	
