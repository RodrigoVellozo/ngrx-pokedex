import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonFacade } from '../state/pokemon.facade';
import { map, take, tap, of } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeListComponent {
  public pokemons$ = this.pokeFacade.pokemons$;

  public types: any = [];

  public workaround$ = this.pokeFacade.pokemonTypes$.pipe(
    tap((type) => {
      this.types.push(type);
    })
  );

  constructor(private readonly pokeFacade: PokemonFacade) {}

  ngOnInit(): void {
    this.pokeFacade.loadPokemons();
    this.pokeFacade.loadPokemonTypes();
  }
}
