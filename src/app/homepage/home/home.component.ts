import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { PokemonFacade } from 'src/app/pokemon/state/pokemon.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public pokemons$ = this.pokeFacade.pokemons$;

  constructor(private readonly pokeFacade: PokemonFacade) {}

  ngOnInit(): void {
    this.pokeFacade.loadPokemons();
  }

  search(search: string){
    console.log(search);
  }

}
