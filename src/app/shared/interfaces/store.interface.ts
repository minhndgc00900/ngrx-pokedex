import { PokemonState } from '@shared/states/pokemon/pokemon.state';

export interface AppStore {
  pokemon: PokemonState;
}