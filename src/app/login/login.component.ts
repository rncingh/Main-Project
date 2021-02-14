import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  loginDetail:any;
  constructor(private router:Router) { 
    this.username = "";
    this.password = "";
    this.loginDetail = {
      username:"admin",
      password:"admin"
    }

  }

  ngOnInit(): void {
  }

  login() {

    if(this.username !== "" || this.password !== "") {
      if(this.username === this.loginDetail.username && this.password === this.loginDetail.password) {
        this.router.navigate(["/app"]); 
      } else {
        alert("Wrong username or password!");
      }
    } else {
      alert("Input cant be blank!")
    }
   
  }

}
