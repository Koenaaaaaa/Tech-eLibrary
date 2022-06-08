import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messages:any=[];

  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMessages()
  }
  onSubmit(data:any)
  {
    this.http.post('http://localhost:4000/contact',data)
    .subscribe((results) =>{  
      console.log('results',results)

    })
    console.log(data)
  }

  getMessages(){
   return this.http.get<any>('http://localhost:4000/contacts')
    .subscribe((data:any) => this.messages=data)
  }

}
