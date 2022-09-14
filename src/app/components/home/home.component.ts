import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private contents:HomeService,
    private route:Router,
    ) { }

  ngOnInit(): void {
   }
  gotoBooks(){
  return this.route.navigate(["/book"]);
  }
  gotoMovies(){
    return this.route.navigate(["/movie"])
  }
  gotoStories(){
    return this.route.navigate(["/story"])
  }
  }


