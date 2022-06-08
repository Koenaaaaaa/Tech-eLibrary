import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component'
import { SignupComponent } from './components/signup/signup.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-elibrary';
  constructor(private dialog:MatDialog){}

  openDialog():void{
    let dialogRef = this.dialog.open(LoginComponent,{

    })
   
  }
  openSignup():void{
   
    let dialogRef = this.dialog.open(SignupComponent,{
      
    })
  }
 
}
