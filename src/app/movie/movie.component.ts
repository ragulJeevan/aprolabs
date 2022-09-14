import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:any;

  constructor(private mv:HomeService) { }

  ngOnInit(): void {
    this.moviereview();
  }
moviereview(){
  this.mv.getMovie().subscribe(res=>{
    this.movie = res.results
    console.log(res);
    
  })
}
}
