import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports:[CommonModule]
})
export class CardComponent {
  @Input()
  public pokemon: any;

  @Input()
  public pokeId!: number;

  @Input()
  public types: any = [];
  
  constructor() {}

  public getPokemonImageById() {
    const formattedNumber = this.leadingZero(this.pokeId);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedNumber}.png`;
  }

  // TODO
  clique(name: string){
    alert('cliocu: '+name)
  }

  leadingZero(str: String | number, size = 3) {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
