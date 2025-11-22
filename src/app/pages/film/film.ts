import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class App {
  protected readonly title = signal('learning-angular');
}
