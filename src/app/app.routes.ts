import { RouterModule, Routes } from '@angular/router';
import { Film } from './film/film';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'film', component: Film }
];

export const appRoutingModule = RouterModule.forRoot(routes);
