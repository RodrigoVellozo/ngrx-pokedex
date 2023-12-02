import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './ui/components/card/card.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { SearchComponent } from './ui/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    BrowserAnimationsModule,
    NavbarComponent,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
