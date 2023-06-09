import { PokemonConstsListAction, PokemonConstsListActionTypes, PokemonCriteria } from './types';

export const fetchPokemonConstsRequest = (): PokemonConstsListAction => ({
	type: PokemonConstsListActionTypes.POKEMON_CONSTS_LOAD_REQUEST,
});

export const fetchPokemonTypesSuccess = (types: string[]): PokemonConstsListAction => ({
	type: PokemonConstsListActionTypes.POKEMON_TYPES_LOAD_SUCCESS,
	payload: types,
});

export const fetchPokemonCountSuccess = (count: number): PokemonConstsListAction => ({
	type: PokemonConstsListActionTypes.POKEMON_COUNT_LOAD_SUCCESS,
	payload: count,
});

export const fetchPokemonListSuccess = (pokemons: PokemonCriteria[]): PokemonConstsListAction => ({
	type: PokemonConstsListActionTypes.POKEMON_LIST_LOAD_SUCCESS,
	payload: pokemons,
});

export const fetchPokemonConstsSuccess = (): PokemonConstsListAction => ({
	type: PokemonConstsListActionTypes.POKEMON_CONSTS_LOAD_SUCCESS,
});

export const fetchPokemonConstsFailure = (error: Error): PokemonConstsListAction => ({
	type: PokemonConstsListActionTypes.POKEMON_CONSTS_LOAD_ERROR,
	payload: error,
});
