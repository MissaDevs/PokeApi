import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAisModule } from 'angular-instantsearch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    NavbarComponent,
    Error404Component,
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    NgAisModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
