import { Component, Input } from '@angular/core';
import { PokemonFacade } from '../state/pokemon.facade';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {

  @Input()
  public pokemon: any;

  @Input()
  public pokeId!: number;

  public readonly types = ['poison', 'grass', 'fire', 'water', 'bug'];

  constructor(private readonly _pokeFacade: PokemonFacade) {}

  public getPokemonImageById() {
    const formattedNumber = this.leadingZero(this.pokeId);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`;
  }

  leadingZero(str: String | number, size = 3) {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
