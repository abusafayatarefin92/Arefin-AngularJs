import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { LoginValidComponent } from './login-valid/login-valid.component';
import { AnimationsexComponent } from './animationsex/animationsex.component';

import { MyserviceService } from './myservice.service';
import { ServiceDateExComponent } from './service-date-ex/service-date-ex.component';
import { HtttexampleComponent } from './htttexample/htttexample.component';
import { MyhttpserviceService } from './myhttpservice.service';
import { DataService } from './data.service';
import { MyhttpComponent } from './myhttp/myhttp.component';
import { SearchhttpComponent } from './searchhttp/searchhttp.component';
import { SearchdataService } from './searchdata.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
	LoginComponent,
	Login2Component,
	Login3Component,
	LoginValidComponent,
	AnimationsexComponent,
	ServiceDateExComponent,
	HtttexampleComponent,
	MyhttpComponent,
	SearchhttpComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	ReactiveFormsModule,
    AppRoutingModule,
	BrowserAnimationsModule	
  ],
  providers: [MyserviceService,MyhttpserviceService,DataService,SearchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
