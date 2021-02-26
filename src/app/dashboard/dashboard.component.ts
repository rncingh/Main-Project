import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DashboardService } from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // show = true;
  finish = true;
  movieList:any
  constructor(private router:Router, private dashbaordService:DashboardService) { 
    this.movieList = [];
    this.dashbaordService.getMovieList().subscribe(movie => {
      this.movieList = movie.results;
      console.log(movie)
    });

    this.dashbaordService.getMovieDetails(800682).subscribe(d => {
      console.log(d);
    })

  }

  ngOnInit(): void {
  }

  // showsidebar() {
  //   this.show = !this.show;
  // }

  close() {
    this.finish = !this.finish;
  }

  logout() {
    localStorage.removeItem("access_token");
    this.router.navigate(["/login"]); 
  }



}
