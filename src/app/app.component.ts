import { Component } from '@angular/core';
import { FilmComponent } from './pages/film';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FilmComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}
