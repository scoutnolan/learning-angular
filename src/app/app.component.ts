import { Component } from '@angular/core';
import { FilmComponent } from './film';

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
