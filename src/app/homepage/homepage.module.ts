import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { PokemonModule } from '../pokemon/pokemon.module';
import { SearchComponent } from '../ui/components/search/search.component';
import { NavbarComponent } from '../ui/components/navbar/navbar.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [ CommonModule, HomepageRoutingModule, PokemonModule, SearchComponent, NavbarComponent ],
})
export class HomepageModule {}