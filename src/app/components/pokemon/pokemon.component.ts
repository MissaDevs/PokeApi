import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

import * as fontawesomeRegular from '@fortawesome/free-regular-svg-icons';
import * as fontawesomeSolid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public id!: number;
  public pokemon: any

  faHeartSolid = fontawesomeSolid.faHeart
  faHeartRegular = fontawesomeRegular.faHeart
  faBack = fontawesomeSolid.faChevronLeft

  constructor(private poekeApi: PokeapiService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadId()
    this.searchPokemon()
  }

  loadId() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  searchPokemon() {
    this.poekeApi.getPokemon(this.id).subscribe(data => {
      this.pokemon = {
        name: data.name,
        height: data.height,
        weight: data.weight,
        type: data.types,
        sprites: data.sprites,
        stats: data.stats,
        abilities: data.abilities,
        moves: data.moves,
        id: data.id
      }
    })
  }
}
