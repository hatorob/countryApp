import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: Boolean = false;

  constructor( private servicesCountry: CountriesService ) {

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


