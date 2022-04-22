import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<any> {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';
    return this.http.get(POKE_API_URL);
  }

  getPokemonDetail(name = 'charmander'): Observable<any> {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get(`${POKE_API_URL}${name}`)
  }

}
