import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemon?: PokemonData;

  attibutesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon('charizard').subscribe({
      next: (res) => {
        this.pokemon = {
          id:res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
        console.log(res);
        console.log(this.pokemon);
      },
      error: (err) => console.log(err)
    });
  }

}
