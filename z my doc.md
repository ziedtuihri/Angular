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



to change in the folder of your project angular

sudo chmod -R ugo+rw yourFileName
