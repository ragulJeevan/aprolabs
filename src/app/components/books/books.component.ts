import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;
  bookArray:any
  constructor(
    private bk:HomeService,
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(){
    this.bk.getBooks().subscribe(res=>{
      this.books=res.results.books;
      console.log(res);
    })
  }

}
