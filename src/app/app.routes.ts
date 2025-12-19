import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: './film/', component: FilmComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
