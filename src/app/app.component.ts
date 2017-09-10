import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserResponse} from './user-response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private http: HttpClient){}
  ngOnInit():void{
    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    });
  }
}
