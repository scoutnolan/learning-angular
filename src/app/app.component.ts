import { Component } from '@angular/core';
import { FilmComponent } from './pages/film';
import { HomeComponent } from './pages/home/home';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FilmComponent,
    HomeComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
