import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
})


export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public initialValue: string = "";

  constructor( private serviceCountry: CountriesService ) {

  }

  ngOnInit(): void {
    this.countries = this.serviceCountry.cacheStore.byCountries.countries;
    this.initialValue = this.serviceCountry.cacheStore.byCountries.term;
  }

  public searchByCountry = ( term: string ) => {
    this.isLoading = true;
    this.serviceCountry.searchByCountry( term ).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
