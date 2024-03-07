import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private serviceCountries: CountriesService ) {

  }

  public searchByRegion = ( term: string ) => {
    this.serviceCountries.searcgByRegion( term ).subscribe( contries => {
      this.countries = contries;
    })
  }

}
