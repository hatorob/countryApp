import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
})


export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading: Boolean = false;

  constructor( private serviceCountry: CountriesService ) {

  }

  public searchByCountry = ( term: string ) => {
    this.isLoading = true;
    this.serviceCountry.searchByCountry( term ).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
