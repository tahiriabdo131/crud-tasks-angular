import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
