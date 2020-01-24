Default message:
**************************************************************************************************
# A8loginSbsCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

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
**************************************************************************************************

create this project
1) under under C:\Users\Z70\Angular 8 projects, type ng new <project name> (e.g., mya8login-sbs-cli)
2) select y to add routing
3) select css (which is the default) stylesheet
See the video: https://www.youtube.com/watch?v=7Hk_m6thW0s&list=PLRAq-063t1uSv1w0j_XMHhJXYPVZG3Djl&index=2&t=1s
Or https://www.youtube.com/watch?v=mDoHtD1hI3I&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=3

check warnings
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues.pgrade your dependencies to the actual version of core-js@3.

Action: install core-js@3
in the project root folder (PS C:\Users\Z70\Angular 8 projects\a8login-sbs-cli): 
npm install -save core-js@3

npm WARN karma-jasmine-html-reporter@1.5.1 requires a peer of jasmine-core@>=3.5 but none is installed. You must install peer dep yourself.
install into the developement environment:
npm install jasmine-core@latest  --save-dev

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (curr:"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (curr:"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\karma\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (curr:"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\@angular\compiler-cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (curr:"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (curre"win32","arch":"x64"})

Action: ignore these warnings


***
A Customize for base project structure
***
Based on instructions in F:\Personal\Dropbox\English Writing\MyBlog at wordpress\Angular to set up a website with log in register.docx
A. Create the Base Project Structure
This part is to create the basic structure, and a home page (index.html) with one line ‘Hello Angular 8!’
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config.

1.Package.json.
change the contents to :
{
"name": "a8login-sbs-cli",
"version": "1.0.0",
...
}
the complete code block:
{
"name": "a8login-sbs-cli",
"version": "1.0.0",
"scripts": {
"mycomment": "The following is to start the command after npm start. The purpose is to launch the index page in a browser",
"ng": "ng",
"start": "webpack-dev-server --mode development --open",
"build": "ng build",
"test": "ng test",
"lint": "ng lint",
"e2e": "ng e2e"
},
"private": true,
"dependencies": {
"@angular/animations": "~8.2.7",
"@angular/common": "^8.2.14",
"@angular/compiler": "^8.2.14",
"@angular/core": "^8.2.14",
"@angular/forms": "^8.2.14",
"@angular/platform-browser": "^8.2.14",
"@angular/platform-browser-dynamic": "^8.2.14",
"@angular/router": "^8.2.14",
"core-js": "^3.6.4",
"rxjs": "^6.5.4",
"tslib": "^1.10.0"
},
"devDependencies": {
"@angular-devkit/build-angular": "~0.803.5",
"@angular/cli": "~8.3.5",
"@angular/compiler-cli": "~8.2.7",
"@angular/language-service": "~8.2.7",
"@types/jasmine": "~3.3.8",
"@types/jasminewd2": "~2.0.3",
"@types/node": "^12.12.25",
"angular2-template-loader": "^0.6.2",
"codelyzer": "^5.0.0",
"css-loader": "^3.4.2",
"html-loader": "^0.5.5",
"html-webpack-plugin": "^3.2.0",
"jasmine-core": "^3.5.0",
"jasmine-spec-reporter": "~4.2.1",
"karma": "~4.1.0",
"karma-chrome-launcher": "~2.2.0",
"karma-coverage-istanbul-reporter": "~2.0.1",
"karma-jasmine": "~2.0.1",
"karma-jasmine-html-reporter": "^1.4.0",
"less": "^3.10.3",
"less-loader": "^5.0.0",
"protractor": "~5.4.0",
"raw-loader": "^3.1.0",
"ts-loader": "^6.2.1",
"ts-node": "~7.0.0",
"tslint": "~5.15.0",
"typescript": "^3.5.3",
"webpack": "^4.41.5",
"webpack-cli": "^3.3.10",
"webpack-dev-server": "^3.10.1",
"zone.js": "^0.9.1"
}
}


2.Angular 8 dependencies
[_W]
Before installation, make sure that it is not on the 'npm start' mode. Otherwise some old packages will be in use, locked and enable to be overwritten.

Many dependencies by Cli is quite out of date, so under C:\Users\Z70\Angular 8 projects\a8login-sbs-cli, reinstall the package using the following lines:

npm install -save @angular/common@8 @angular/compiler@8 @angular/core@8 @angular/forms@8 @angular/platform-browser@8 @angular/platform-browser-dynamic@8 @angular/router@8 core-js@3 rxjs@6 zone.js@latest

•	These are dependent packages that are required for angular to build the structure. Description of these package files can be found at the part 2 tutorial web page (as stated in the beginning of part A). After downloading and installing these files, the names and versions of the packages will be added automatically into package.json.

•	[_L]
use @latest to install the latest package
JSON file does not allow to add comments. However, one can insert properties (fields) like 'mycomments', ...e.g.
"mycomment": "This part installs the dependencies (i.e., the angular modules for run the web site)",

3.Angular 8 develop dependencies
Again the develop dependencies are also quite out of date. Reinstall using the following command lines under the folder C:\Users\Z70\Angular 8 projects\a8login-sbs-cli:

npm install --save-dev @types/node@12 angular2-template-loader@0 html-webpack-plugin@3 raw-loader@3 ts-loader@6 typescript@3 webpack@4 webpack-cli@3 webpack-dev-server@3

•	Again, the names and versions of these development packages are added to package.json.

•	To note, the list I have here is different from Jason’s example. Jason’s file mentioned css-loader 2.2.1, html-loader 0.5.5, less 3.0.4, less-loader 0.23.1. These packages are not installed by the commands above.
(The list of development packages in Jason’s example: https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)
•	So the following are installed again via node js command lines:

npm install --save-dev css-loader@latest html-loader@0 less@3 less-loader@latest
Consequently, I have newer css-loader, less, and less-loader than the versions in Jason’s file.
•	[_L]: one can re-install with new versions by repeat the same commands above with new specification of versions (e.g., instead of raw-loader@3, use raw-loader@latest). Such commands will install the new versions, overwriting the old ones. The file package.json will be renewed with added packages, or new versions.
•	The latest packages can be found at https://www.npmjs.com/
•	After installation, new folders are created under the root folder. These are for corresponding package files.

There are a couple of warnings:
- npm WARN rollback Rolling back node-pre-gyp@0.14.0 failed (this is probably harmless): EPERM: operation not permitted, lstat 'C:\Users\Z70\Angular 8 projects\a8login_stepbystep\node_modules\fsevents\node_modules'
Actions: do nothing

npm WARN @angular/core@8.2.14 requires a peer of zone.js@~0.9.1 but none is installed. You must install peer dependencies yourself.
Action: reinstall (rollback to )zone.js@~0.9.1 by the following command:
npm install --save-dev zone.js@~0.9.1

npm WARN a8login_sbs@1.0.0 No repository field.
npm WARN a8login_sbs@1.0.0 No license field.
Action: do nothing for now. These are for setting git URL and license, will do it later.

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
Action: do nothing, cannot see how it is harmful for now.

4. Reinstall the dependencies.
•	Now that the dependencies in 2 and 3 (for Angular 8, and for development) are specified in package.json. One can always type ‘nmp install’ in node.js command (under the folder ‘mya8login’’) to re-install all the packages.

5. Create tsconfig.json (https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)
•	In VSCode, under ‘mya8login’’, make change in the file ‘tsconfig.json’. In the file, paste:
{
"compilerOptions": {
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"target": "ES5",
"baseUrl": "src",
"paths": {
"@/*": [
"app/*"
]
}
}
}
•	The details of each compiler can be found at https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config.

complete code
{
"compileOnSave": false,
"compilerOptions": {
"emitDecoratorMetadata": true,
"target": "ES5",
"baseUrl": "src",
"paths": {
"@/*": [
"app/*"
]
},
"outDir": "./dist/out-tsc",
"sourceMap": true,
"declaration": false,
"downlevelIteration": true,
"experimentalDecorators": true,
"module": "esnext",
"moduleResolution": "node",
"importHelpers": true,
"typeRoots": [
"node_modules/@types"
],
"lib": [
"es2018",
"dom"
]
},
"angularCompilerOptions": {
"fullTemplateTypeCheck": true,
"strictInjectionParameters": true
}
}

6.Create Webpack 4 Config.
This is not provided in the default A8 Cli.
•	In VSCode, under the project root folder, Create a file ‘webpack.config.js’. In the file, paste the code from the Webpack 4 Config part of https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
•	Description on the code can be found at the corresponding section of https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config

//Basically the webpack config is to setup how to compile ts to js, and how to run js programs/plug-ins properly.

// the function require is to load modules. see https://www.quora.com/What-is-the-use-of-require-function-in-Javascript
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
entry: './src/main.ts',
resolve: {
extensions: ['.ts', '.js'],
alias: {
'@': path.resolve(__dirname, 'src/app/'),
}
},
module: {
rules: [
{
test: /\.ts$/,
use: ['ts-loader', 'angular2-template-loader']
},
{
test: /\.html$/,
use: 'html-loader'
},
{
test: /\.less$/,
use: ['style-loader', 'css-loader', 'less-loader']
},

// workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
{
test: /[\/\\]@angular[\/\\].+\.js$/,
parser: { system: true }
}
]
},
plugins: [
new HtmlWebpackPlugin({ template: './src/index.html' }),
new webpack.DefinePlugin({
// global app config object
config: JSON.stringify({
apiUrl: 'http://localhost:4000'
})
}),

// workaround for warning: Critical dependency: the request of a dependency is an expression
new webpack.ContextReplacementPlugin(
/\@angular(\\|\/)core(\\|\/)fesm5/,
path.resolve(__dirname, 'src')
)
],
optimization: {
splitChunks: {
chunks: 'all',
},
runtimeChunk: true
},
devServer: {
historyApiFallback: true
}
}

7. Create Src and app foloder
The folders are created during Cli installation. No need to create them again

8.Change Angular App Component template
•	In VSCode, and under the folder ‘app’, and in the file ‘app.component.html’
•	In this file, paste the code
<h1>The dynamic contents saved in app.compoent.html, and to be displayed on the index page.</h1>


• The default installation injects more contents in the page. Basically those are style settings and links and can be deleted.
(https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)

9. Change Angular App Component
•	Under the folder ‘app’, in the file ‘app.component.ts’, paste the code

/* this file is to
1) load build-in modules (Component)
2) specify the web components to obtain (in which html file, within what tag) by decorating Component
*/

/*import the module 'Component' from angular's core modules 9under the folder /node_modules/@angular/core*/
import { Component } from '@angular/core';

/*The following is to run the module 'component',
i.e., to get components/contents in the tag <app></app> from the file 'app.component.html'
The actions to assign values (selector = 'app', temlateUrl = 'app.component.html') is called decorate.
*/

@Component({
// tslint:disable-next-line: component-selector
selector: 'app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'a8login-sbs-cli';
}

•	Note that the code in the following page is not suitable here. That code will be added in the future. Same for the following steps 10 and 11 (https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)

[_Q][_W]
I was forced to add the line // tslint:disable-next-line: component-selector. Otherwise it prompts error, not sure what it means.

10.Change Angular App Module
•	Under the folder ‘app’, in the file ‘app.module.ts’, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config

/* this file is to
1) load build-in modules (NgModule,BrowserModule)
2) run the customized module AppComponent (which is to specify the web components to obtain,
and how to display it)
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// check app.component.ts, in which there is a class 'AppComponent' that is ready to be imported here.
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


/*decorate @NgModule, import the broswermodule (enable browsing in different browers like Chrome, firefox, etc),
and declare AppComponent so that it can be used by all components and templates,
and bootstrap the AppComponent (what the heck is that? bootstrap is a pack of solution for CSS formating...
https://angular.io/guide/bootstrapping, and https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)
*/
@NgModule({
declarations: [
AppComponent,
HomeComponent
],
imports: [
BrowserModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }


11.Change Angular Polyfills File
•	Under the folder ‘src’, in the file ‘polyfills.ts’, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config
/**
* This file includes polyfills needed by Angular and is loaded before the app.
* You can add your own extra polyfills to this file.
*
* This file is divided into 2 sections:
* 1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
* 2. Application imports. Files imported after ZoneJS that should be loaded before your main
* file.
*
* The current setup is for so-called "evergreen" browsers; the last versions of browsers that
* automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
* Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
*
* Learn more in https://angular.io/guide/browser-support
*/

/***************************************************************************************************
* BROWSER POLYFILLS
*/

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js'; // Run `npm install --save classlist.js`.

/**
* Web Animations `@angular/platform-browser/animations`
* Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
* Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
*/
// import 'web-animations-js'; // Run `npm install --save web-animations-js`.

/**
* By default, zone.js will patch all possible macroTask and DomEvents
* user can disable parts of macroTask/DomEvents patch by setting following flags
* because those flags need to be set before `zone.js` being loaded, and webpack
* will put import in the top of bundle, so user need to create a separate file
* in this directory (for example: zone-flags.ts), and put the following flags
* into that file, and then add the following code before importing zone.js.
* import './zone-flags.ts';
*
* The flags allowed in zone-flags.ts are listed here.
*
* The following flags will work for all browsers.
*
* (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
* (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
* (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*
* (window as any).__Zone_enable_cross_context_check = true;
*
*/

import 'core-js/features/reflect';
/***************************************************************************************************
* Zone JS is required by default for Angular itself.
*/

import 'zone.js/dist/zone'; // Included with Angular CLI.


/***************************************************************************************************
* APPLICATION IMPORTS
*/

[_L]the word polyfill means filling the holes (unsupported functions) by poly methods (could be javascript or other languages)

12. Change Angular Main (Bootstrap/Launch) File
·In VSCode, and under the folder ‘src’, in the file ‘main.ts’, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
/**this file is to
* 1) load build-in modules (polyfill,platformBrowserDynamic)
* 2) run the customized module 'AppModule' (which is to specify where are the web components, and how to display )
*/

// import polyfill modules (what is polyfill? see polyfill.ts )
import './polyfills';

// import the module to deal with web component formating (like CSS)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
enableProdMode();
}

// bootstrap means formating web components
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));

13. Change Angular Main Index Html File
•	In VSCode, and under the folder ‘src’, in the file ‘index.html’, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
<!doctype html>
<html lang="en">
<head>
<base href="/" />
<meta charset="utf-8" />
<title>A8loginSbsCli</title>
<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/x-icon" href="favicon.ico">

<!-- bootstrap css -->
<link href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />

</head>
<body>
<app>Loading...</app>
</body>
</html>

[_L] This part is to load the web contents from app/app.component.html, and replace the 'loading' in the <app> tags, and format the contents as specified in app.module.ts -> app.compnent.ts

14. Add start script to package.json
•	In VSCode, and in package.json, paste the code from the corresponding lines in package.json from https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json

"scripts": {
"mycomment": "The following is to start the command after npm start. The purpose is to launch the index page in a browser",
"start": "webpack-dev-server --mode development --open"
}

15. Start the application
•	In node.js command window and under the project root, type npm start

16.Handle errors
Problem:
npm start
Cannot find package.json
npm ERR! path C:\Users\Z70\package.json
Analysis:
Started the line in the folder:
PS C:\Users\Z70\Angular 8 projects
Solution:
should start the line in the folder:
C:\Users\Z70\Angular 8 projects\a8login-sbs-cli

Problem:
in package.json, the scripts part:
"start": "webpack-dev-server --mode development --open"
The web page was launched in localhost:8080, but stuck at 'loading...'

change the start to 'ng serve'
prompted the error:
ERROR in The Angular Compiler requires TypeScript >=3.4.0 and <3.6.0 but 3.7.5 was found instead.
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

rollback to typescript 3.5.3
npm install --save-dev typescript@3.5
It works.
[_Q]
It seems that for CLI, on localhost:4200 it works smoothly. It does not work and stuck on the index.html. Not sure why
[_W]
Need to open the browser manually (it won't start the browser by itself

********************************
A1. Link to github
********************************

Create a new repository at github:
https://github.com/ShenzhenYAO/mya8login-cli-sbs.git
under the folder
C:\Users\Z70\Angular 8 projects\a8login-sbs-cli
run the following
git remote add origin https://github.com/ShenzhenYAO/mya8login-cli-sbs.git
git add .
git commit -m "1"
git push origin master
[_W] Check the gitignore file, the node_modeules folder is not pushed

********************************
B. Add routing & multiple pages
********************************

This part is to add ‘home, login, and register’ into the top banner of the page. 
Tutorial of this part is available at https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
1. Change Home Page Component & Template
Under C:\Users\Z70\Angular 8 projects\a8login-sbs-cli\src\app\, 
create the home page componets by type:
ng g c home
•	In VSCODe, and under app, make change in the folder ‘home’. Inside ‘home’, make change in the file ‘home.component.html’. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘home’, make change in the file ‘home.component.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘home’, make change in the file ‘index.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
2. Login Page Component & Template
Under C:\Users\Z70\Angular 8 projects\a8login-sbs-cli\src\app\, 
create the home page componets by type:
ng g c login
•	In VSCODe, and under app, make change in the folder ‘login’. Inside ‘login’, make change in the file ‘login.component.html’. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘login’, make change in the file ‘login.component.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘login’, make change in the file ‘index.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
3. Register Page Component & Template
Under C:\Users\Z70\Angular 8 projects\a8login-sbs-cli\src\app\, 
create the home page componets by type:
ng g c register
•	In VSCODe, and under app, make change in the folder ‘register’. Inside ‘register’, make change in the file ‘register.component.html’. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘register’, make change in the file ‘register.component.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘register’, make change in the file ‘index.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
4. Add Components to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages. Basically, it is to add the specification for home, login, and register, as have been done in step 1 to 3.
5. Configure App Routing Module
•	Question: what is routing…
•	In VSCODe, and under app, make change in the file ‘app.routing.ts’
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
6. Add App Routing Module to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages. Basically, it is to add the specification for home, login, and register, as have been done in step 5.
7. Add Router Outlet and Navigation to App Component
•	In /src/app/app/component.html, replace the <h1>Hello Angular 8!</h1> message with the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
8. Update Webpack Dev Server Config
•	Add code to webpack.config.js to prevent 404 errors corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Note that this part is different from the above source, the correct code can be found in https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json

9. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login_stepbystep, type nmp start to launch the application.


****************************************************
C. Login Form, Authentication Service & Route Guard
****************************************************

This part is to create the login form. With the link to the register form (the register form is not developed yet). 
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard. 

1. Create Fake Backend
1.1 Create Helpers Folder
•	In VSCode, and under app, create a folder ‘_helpers’.
1.2 Create Fake Backend Http Interceptor
•	In _helpers, create a file ‘fake-backend.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
1.3 Create Barrel File in Helpers Folder
•	In _helpers, create a file ‘index.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
1.4 Add Fake Backend to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
2. Create Global Config Object
2.1
•	Add code to webpack.config.js from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages. 
•	Note that this part is different from the above source, the correct code can be found in https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
2.2 Create Custom Typings File
•	In _/src, create a file ‘typings.d.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
3. Create Authentication Service
3.1 Create Services Folder
•	In VSCode, and under app, create a folder ‘_services’. 
3.2 Create Authentication Service
•	In _services, create a file ‘authentication.service.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
3.3 Create Barrel File in Services Folder
•	In _ services, create a file ‘index.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
4. Import ReactiveFormsModule and HttpClientModule into App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
5. Add Form Logic to Login Component
•	In /src/app/login/login.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
6. Add Form HTML to Login Component Template
•	In /src/app/login/login.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
7. Add Logout and Show/Hide Nav to App Component
7.1 Add Logic to App Component
•	In /src/app/app.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
7.2 Update Nav in App Component Template
•	In /src/app/app.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
8. Create Route Guard
8.1 Create Auth Guard
•	In _helpers, create a file ‘auth.guard.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
8.2 Add Auth Guard to Helpers Barrel File
•	In /src/app/_helpers/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
8.3 Add Auth Guard to Home Page Route
•	In /src/app/app.routing.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
9. Create JWT Interceptor
9.1 Create Angular 8 JWT Interceptor (Note that the tutorial said Create Angular 7 JWT Interceptor)
•	In _helpers, create a file ‘jwt.interceptor.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
9.2 Add JWT Interceptor to Barrel File
•	In /src/app/_helpers/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
10. Create Error Interceptor
10.1 Create Angular 8 Error Interceptor
•	In _helpers, create a file ‘error.interceptor.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
10.2 Add Error Interceptor to Barrel File
•	In /src/app/_helpers/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
11. Add HTTP Interceptors to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
12. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type nmp start to launch the application.

***********************************
D. Registration Form & User Service
***********************************
This part is to make the registration form
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
1. Add Register Route to Fake Backend
1.1 Update Fake Backend
•	In /src/app/_helpers/fake-backend.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
2. Create User Service
2.1 Create User Service
•	In _ services, create a file ‘user.service.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
2.2 Add User Service to Services Barrel File
•	In /src/app/_services/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
3. Add Form Logic to Register Component
3.1 Update Register Component
•	In /src/app/register/register.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
4. Add Form HTML to Register Component Template
4.1 Update Register Component Template
•	In /src/app/register/register.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
5. Add Success Alert To Login Component
5.1 Update Login Component
•	In /src/app/login/login.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
5.2 Update Login Component Template
•	In /src/app/login/login.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
6. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type nmp start to launch the application.

***********************************
E. Home Page & Alert Component
***********************************
This part is to complete the homepage. After log  in, show the existing users, and allow to delete them.
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
1. Add "Get Users" and "Delete User" Routes to Fake Backend
1.1 Update Fake Backend
•	In /src/app/_helpers/fake-backend.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component. 
2. Add Logic to Home Component
2.1 Update Home Component
•	In /src/app/home/home.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
3. Add HTML to Home Component Template
•	In /src/app/home/home.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
4. Create Alert Service
4.1 Create Alert Service
•	In _services, create a file ‘alert.service.ts.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
4.2 Add Alert Service to Services Barrel File
•	In /src/app/_services/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5. Create Alert Component & Template
5.1 Create Components Folder
•	In /src/app, create a folder named _components.
5.2 Create Alert Component
•	In _components, create a file ‘alert.component.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.3 Create Alert Component Template
•	In _components, create a file ‘alert.component.html’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.4 Create Barrel File in Components Folder
•	In _components, create a file ‘index.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.5 Add Alert Component to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.6 Add Alert Component to App Component Template
•	In /src/app/app.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
6. Refactor Login Component to use Alert Service
6.1 Refactor Login Component Logic
•	In /src/app/login/login.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
6.2 Remove Alert HTML from Login Component Template
•	In /src/app/login/login.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
7. Refactor Register Component to use Alert Service
7.1 Refactor Register Component Logic
•	In /src/app/register/register.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
7.2 Remove Alert HTML from Register Component Template
•	In /src/app/register/register.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
8. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type nmp start to launch the application.

***********************************
F. Migrating to an Angular CLI Project
***********************************
This part is to make an CLI project, instead of the Angular 8 project. Question: What is the difference between CLI and the Angular 8 projects?
This part of tutorial can be found at https://jasonwatmore.com/post/2019/06/13/angular-7-tutorial-part-7-migrating-to-an-angular-cli-project#update-app-config
step 1 to 3 is not needed here, as they have been done in the previous steps.
1. Install the Angular 8 CLI (Done)
2. Create a new Angular CLI Project
•	In node.js command window and under the folder C:\Users\Z70\Angular 8 projects, type ng new mya8cli
•	Will be prompt whether or not add angular routing, select N
•	For stylesheet, choose ‘less’
3. Copy Angular Tutorial App Code to Angular CLI Project
•	In node.js command, type cd C:\Users\Z70\Angular 8 projects\mya8cli
•	Type ‘code .’ to open VSCode
•	Replace the C:\Users\Z70\Angular 8 projects\mya8cli/src/app folder in the new Angular CLI project with the C:\Users\Z70\Angular 8 projects\mya8login/src/app folder from the tutorial project you created in the previous parts of the tutorial series. 
•	Replace the C:\Users\Z70\Angular 8 projects\mya8cli/src /index.html file in the new Angular CLI project with the C:\Users\Z70\Angular 8 projects\mya8login/src/index.html file from the tutorial project you created in the previous parts of the tutorial series.

4. Copy Config Variables to Environment Configs
4.1 Add apiUrl into environment files
•	Angular CLI projects store config data in environment config files (/src/environments/environment.ts & /src/environments/environment.prod.ts) instead of in the webpack.config.js that we've been using so far, so we need to copy the config data from our webpack config to the Angular CLI environment config files.
•	Copy the following apiUrl property from the C:\Users\Z70\Angular 8 projects\mya8login/src /webpack.config.js in the section of plugins:[]
(i.e., the line is apiUrl: 'http://localhost:4000')
•	In C:\Users\Z70\Angular 8 projects\mya8cli/src/environments/environment.ts, paste the line 
apiUrl: 'http://localhost:4000' 
after the line ‘production: false’ (need to add a comma and make the previous line as ‘production:false,’).
•	In C:\Users\Z70\Angular 8 projects\mya8cli/src/environments/ environment.prod.ts, paste the line 
apiUrl: 'http://localhost:4000' 
after the line ‘production: true’ (need to add a comma and make the previous line as ‘production:true,’).
4.2 Add '@environments' path alias to tsconfig.json
•	In C:\Users\Z70\Angular 8 projects\mya8cli\tsconfig.json, 
•	Add lines as specified in the corresponding part of https://jasonwatmore.com/post/2019/06/13/angular-7-tutorial-part-7-migrating-to-an-angular-cli-project#update-app-config
5. Replace 'config.apiUrl' with 'environment.apiUrl' in Services
5.1 Update Authentication Service
•	In C:\Users\Z70\Angular 8 projects\mya8cli\src\app\_services\authentication.service.ts, add lines as specified in the corresponding part of https://jasonwatmore.com/post/2019/06/13/angular-7-tutorial-part-7-migrating-to-an-angular-cli-project#update-app-config.
[_L] Jason's code is
import { environment } from '@environments/environment';
It does not work
According to the website
https://github.com/angular/universal/issues/734
, changed to the following
import { environment } from 'environments/environment'; 

5.2 Update User Service
•	In C:\Users\Z70\Angular 8 projects\mya8cli\src\app\_services\user.service.ts, add lines as specified in the corresponding part of https://jasonwatmore.com/post/2019/06/13/angular-7-tutorial-part-7-migrating-to-an-angular-cli-project#update-app-config.
[_L] Jason's code is
import { environment } from '@environments/environment';
It does not work
According to the website
https://github.com/angular/universal/issues/734
, changed to the following
import { environment } from 'environments/environment';
6. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type ng serve --open to launch the application.
