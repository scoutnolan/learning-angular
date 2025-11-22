import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './motorsport.html',
  styleUrl: './motorsport.css'
})
export class App {
  protected readonly title = signal('learning-angular');
}
