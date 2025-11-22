import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class App {
  protected readonly title = signal('learning-angular');
}
