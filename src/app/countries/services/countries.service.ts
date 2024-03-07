import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

// url por capital ->https://restcountries.com/v3.1/capital/{capital}

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private api_url = "https://restcountries.com/v3.1/";

  constructor( private http: HttpClient ) {

  }

  /**
   *
   * @param capital -> busqueda por capital
   * @returns retorna un observable de country
   */

  public searchByCapital = ( capital: string ): Observable<Country[]> => {
   console.log("busqueda por capital desde services -> ", {capital});
   // el of del catchError nos permite retornar un nuevo observable, en este caso un array vacio
   return this.http.get<Country[]>(`${this.api_url}capital/${capital}`)
              .pipe(
                catchError( (error) => of([]) )
              );
  }

  /**
   *
   * @param country Busqueda por pais
   * @returns retorna un observable de country
   */
  public searchByCountry = ( country: string ): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.api_url}name/${country}`)
                .pipe(
                  catchError( (error) => of([]))
                );
  }

  /**
   *
   * @param region Busqueda por region
   * @returns retorna un observable de country
   */
  public searcgByRegion = ( region: string ): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.api_url}region/${region}`)
                    .pipe(
                      catchError( (error) => of([]))
                    );
  }

}
