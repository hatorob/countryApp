import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
   */

  public searchByCapital = ( capital: string ): Observable<Country[]> => {
   console.log("busqueda por capital desde services -> ", {capital});
   return this.http.get<Country[]>(`${this.api_url}capital/${capital}`);
  }


}
