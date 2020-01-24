// this file is to 1) load build-in modules (Component)
// 2) specify the web components to obtain (in which html file, within what tag) by decorating Component
// best explained here: https://www.youtube.com/watch?v=16rQyEQtpyQ

// import the module 'Component' from angular's core modules 9under the folder /node_modules/@angular/core
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';

/*The following is to run the module 'component', i.e., to get components/contents in the tag <app></app> from the file 'app.component.html'
 The actions to assign values (selector = 'app', temlateUrl = 'app.component.html') is called decorate.
*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// define a module AppComponent (instead of script), and get it ready to be imported by other ts (e.g., app.module.ts)
export class AppComponent {
    title = 'a8login-sbs-cli';
    currentUser: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
