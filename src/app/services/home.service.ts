import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private route:Router,
    private http:HttpClient
    ) {}
  getBooks():Observable<any>{
    return this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SR62I7ApyN6tAvnDrDUIainTRDHNU63n")
  }
  
}
