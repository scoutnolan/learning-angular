import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { FilmComponent } from './pages/film';

const routes: Routes = [
  { path: '', component: HomeComponent },         // Default route for the homepage
  { path: 'film', component: FilmComponent }, // Route for the about page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }