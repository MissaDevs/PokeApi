import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokedex } from 'src/interfaces/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  public url: string;

  constructor(private https: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/';
  }

  getPokemon(numero: number) {
    return this.https.get<any>(`${this.url}pokemon/${numero}`);
  }
}
