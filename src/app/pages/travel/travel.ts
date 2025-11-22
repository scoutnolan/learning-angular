import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './travel.html',
  styleUrl: './travel.css'
})
export class App {
  protected readonly title = signal('learning-angular');
}
