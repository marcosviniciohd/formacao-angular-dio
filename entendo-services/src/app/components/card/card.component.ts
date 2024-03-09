import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  name: string = 'CHARIZARD';
  attibutesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon('picatchu').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }

}
