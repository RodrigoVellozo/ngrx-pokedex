import { Component } from '@angular/core';
import { PokemonFacade } from '../state/pokemon.facade';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  public pokemons$ = this.pokeFacade.pokemons$;

  constructor(
    private readonly pokeFacade: PokemonFacade
  ) {}

  ngOnInit(): void {
    this.pokeFacade.loadPokemons();
  }
}
