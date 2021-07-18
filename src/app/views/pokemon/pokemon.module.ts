import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    PokemonFormComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
