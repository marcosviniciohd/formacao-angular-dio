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

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.pokemonService.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id:res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
      },
      error: (err) => console.log('Not Found, 404')
    });

  }

}
