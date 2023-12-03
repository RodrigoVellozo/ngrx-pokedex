import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { PokemonFacade } from 'src/app/pokemon/state/pokemon.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public pokemons$ = this._pokeFacade.pokemons$;

  public pokemon$ = this._pokeFacade.pokemon$.pipe(
    tap((response) => {
      console.log('response', response);

      if(response){
        console.log('tem results');
      }else{
        console.log('nao tem results');
        
      }
    })
  );

  constructor(private readonly _pokeFacade: PokemonFacade) {}

  ngOnInit(): void {
    this._pokeFacade.loadPokemons();
  }

  search(query: string) {
    this._pokeFacade.loadPokemon(1, { query: query });
  }
}
