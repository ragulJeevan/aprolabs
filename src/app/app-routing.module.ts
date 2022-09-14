import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"book",component:BooksComponent},
  {path:"movie",component:MovieComponent},
  {path:"story",component:StoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
