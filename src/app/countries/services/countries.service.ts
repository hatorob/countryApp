import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, delay } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

// url por capital ->https://restcountries.com/v3.1/capital/{capital}

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private api_url = "https://restcountries.com/v3.1/";

  //! Para mantener la información
  public cacheStore: CacheStore = {
    byCapital: { term: '',countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }


  constructor( private http: HttpClient ) {

  }


  private getCountriesRequest = ( url: string ): Observable<Country[]> => {
    return this.http.get<Country[]>( url )
                .pipe(
                  catchError( (error) => of([]) ),
                  //delay(2000)
                );
  }

  /**
   *
   * @param id busqueda por code de paises
   * @returns en este caso solo retornamos el primer elemento de mi arreglo, es decir, retornamos es un objeto
   */

  public searchCountryById = (id: string): Observable<Country | null >  => {
    //console.log(id);
    return this.http.get<Country[]>(`${this.api_url}alpha/${id}`)
                .pipe(
                  map( countries => countries.length > 0 ? countries[0] : null),
                  catchError( (error) => of(null) )
                );
  }

  /**
   *
   * @param capital -> busqueda por capital
   * @returns retorna un observable de country
   */

  public searchByCapital = ( capital: string ): Observable<Country[]> => {
   console.log("busqueda por capital desde services -> ", {capital});
   // el of del catchError nos permite retornar un nuevo observable, en este caso un array vacio
   return this.getCountriesRequest(`${this.api_url}capital/${capital}`);
  }

  /**
   *
   * @param country Busqueda por pais
   * @returns retorna un observable de country
   */
  public searchByCountry = ( country: string ): Observable<Country[]> => {
    return this.getCountriesRequest(`${this.api_url}name/${country}`);
  }

  /**
   *
   * @param region Busqueda por region
   * @returns retorna un observable de country
   */
  public searcgByRegion = ( region: string ): Observable<Country[]> => {
    return this.getCountriesRequest(`${this.api_url}region/${region}`);
  }

}
