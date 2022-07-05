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
  faRight = fontawesomeSolid.faChevronRight

  single: any[] = [];
  view1: [number, number] = [700, 400];
  view2: [number, number] = [400, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#AAAAAA', '#C7B42C', '#7c7c7c', '#17b4ed']
  };

  constructor(private poekeApi: PokeapiService ,private route: ActivatedRoute) {}

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

      for (let i of data.stats) {
        this.single.push({
          name: i.stat.name,
          value: i.base_stat
        })
      }
    })
  }

  getWeight(weight: number) {
    return weight / 1000
  }
}
