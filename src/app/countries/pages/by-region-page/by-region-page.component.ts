import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectionRegion?: Region;

  constructor( private serviceCountries: CountriesService ) {

  }

  public searchByRegion = ( term: Region ) => {
    this.isLoading = true;
    this.selectionRegion = term;
    this.serviceCountries.searcgByRegion( term ).subscribe( contries => {
      this.countries = contries;
      this.isLoading = false;
    })
  }

}
