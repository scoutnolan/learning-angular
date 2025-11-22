import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './divider.html',
  styleUrl: './divider.css'
})
export class App {
  protected readonly title = signal('learning-angular');
}
