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
