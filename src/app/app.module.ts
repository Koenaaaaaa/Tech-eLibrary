import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutShelfComponent } from './components/about-shelf/about-shelf.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
          AboutShelfComponent,
          OurTeamComponent,
          HomeComponent,
          ContactComponent,
          LoginComponent,
          SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,MatButtonModule,MatCardModule,
    MatDatepickerModule,MatFormFieldModule,MatIconModule,MatInputModule,MatRadioModule,
    MatToolbarModule

    
  ],
  entryComponents:[LoginComponent, SignupComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
