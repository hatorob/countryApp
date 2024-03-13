import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public initialValue: string = "";

  constructor( private servicesCountry: CountriesService ) {

  }
  ngOnInit(): void {
    this.countries = this.servicesCountry.cacheStore.byCapital.countries;
    this.initialValue = this.servicesCountry.cacheStore.byCapital.term;
  }

  public searchByCapital = (term: string): void => {
    //console.log("desde by capital page", {term});
    this.isLoading = true;

    this.servicesCountry.searchByCapital(term).subscribe( contries => {
      this.countries = contries;
      this.isLoading = false;
    });
  }

}


