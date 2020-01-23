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

A. create this project
1) under under C:\Users\Z70\Angular 8 projects, type ng new <project name> (e.g., mya8login-sbs-cli)
2) select y to add routing
3) select css (which is the default) stylesheet
See the video: https://www.youtube.com/watch?v=7Hk_m6thW0s&list=PLRAq-063t1uSv1w0j_XMHhJXYPVZG3Djl&index=2&t=1s
Or https://www.youtube.com/watch?v=mDoHtD1hI3I&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=3

B. check warnings
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

