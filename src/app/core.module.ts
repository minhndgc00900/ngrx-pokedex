import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    // StoreModule.forRoot(reducer),
    // EffectsModule.forRoot([PokemonEffects])
  ],
  providers: [],
  exports: []
})
export class CoreModule { }
