import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

import { environment } from 'src/environments/environment';
import algoliasearch from 'algoliasearch';

const options = environment.algolia;
const searchClient = algoliasearch(options.appId,options.apiKey);

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: any[] = [];

  config = {
    indexName: 'prod_pokedex',
    searchClient
  };

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit(): void {
  }

  upperCase(value:string): string {
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1);
  }
}
