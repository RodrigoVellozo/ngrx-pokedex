import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [ CommonModule, HomepageRoutingModule, PokemonModule ],
})
export class HomepageModule {}