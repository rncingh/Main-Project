import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  password:any;
  courseDetail:any;
  constructor(private router:Router) { 
    this.password = "";
    this.courseDetail = {
      password:"12345"
    }
  
  }

  ngOnInit(): void {
  }

  login() {
    const a = 5;
    
    if(this.password !== "") {
      if(this.password === this.courseDetail.password) {
        this.router.navigate(["app/student/studentlist"]); 
      }
    }
  }
}
