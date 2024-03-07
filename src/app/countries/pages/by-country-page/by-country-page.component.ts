import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
})


export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private serviceCountry: CountriesService ) {

  }

  public searchByCountry = ( term: string ) => {
    this.serviceCountry.searchByCountry( term ).subscribe( countries => {
      this.countries = countries;
    })
  }

}
