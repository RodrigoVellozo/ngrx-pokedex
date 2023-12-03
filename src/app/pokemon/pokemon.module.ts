import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonFacade } from './state/pokemon.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './state/pokemon.effects';
import { pokemonFeatureKey, pokemonReducer } from './state/pokemon.reducer';
import { CardComponent } from '../ui/components/card/card.component';

@NgModule({
  declarations: [
    PokeListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(pokemonFeatureKey, pokemonReducer),
    EffectsModule.forFeature([PokemonEffects]),
    CardComponent
  ],
  exports: [
    PokeListComponent
  ],
  providers:[
    PokemonFacade
  ]
})
export class PokemonModule { }
