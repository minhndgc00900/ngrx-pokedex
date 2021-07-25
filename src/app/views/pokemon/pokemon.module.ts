import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS = [
  PokemonListComponent,
  PokemonComponent,
  PokemonFormComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: COMPONENTS,
})
export class PokemonModule { }
