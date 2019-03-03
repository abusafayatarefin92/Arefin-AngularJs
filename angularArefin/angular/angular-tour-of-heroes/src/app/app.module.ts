import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TeacherComponent } from './teacher/teacher.component';


@NgModule({
    declarations: [
    AppComponent,
    HeroesComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
