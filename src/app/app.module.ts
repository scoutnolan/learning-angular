import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { FilmComponent } from './film';


@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule,
        AppComponent,
        FilmComponent
    ],
    bootstrap: [AppModule]
})
export class AppModule { };