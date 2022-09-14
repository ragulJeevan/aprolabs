import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  stories:any;

  constructor( private story:HomeService) { }

  ngOnInit(): void {
    this.getAllStory(); 
  }
  getAllStory(){
    return this.story.getStory().subscribe(res=>{
      this.stories=res.results
      console.log(res);
      
    })
  }

}
