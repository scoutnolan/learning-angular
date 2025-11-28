import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Film } from './pages/film/film';
import { Games } from './pages/games/games';
import { Motorsport } from './pages/motorsport/motorsport';
import { Other } from './pages/other/other';
import { Travel } from './pages/travel/travel';
import { Contact } from './repeatables/contact/contact';
import { Divider } from './repeatables/divider/divider';
import { Navigator } from './repeatables/navigator/navigator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Film, Games, Motorsport, Other, Contact, Travel, Divider, Navigator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-angular');
}
