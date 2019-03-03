import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const firebaseConfig = {
	apiKey: "AIzaSyCQqFlMYCxD-MiDlUympiuLRibFJ49TXCY",
    authDomain: "quiz-e5b78.firebaseapp.com",
    databaseURL: "https://quiz-e5b78.firebaseio.com",
    projectId: "quiz-e5b78",
    storageBucket: "quiz-e5b78.appspot.com",
    messagingSenderId: "1008128613730"
 };