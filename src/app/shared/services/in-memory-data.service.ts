import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { pokemons as pokemonsDB } from '../mock/pokemon';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const pokemons = pokemonsDB;
    return { pokemons };
  }
  genId(): number {
    return Math.round(Math.random() * 1000000);
  }
}
