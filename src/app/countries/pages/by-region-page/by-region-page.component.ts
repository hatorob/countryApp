import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectionRegion?: Region;

  constructor( private serviceCountries: CountriesService ) {

  }
  ngOnInit(): void {
    this.countries = this.serviceCountries.cacheStore.byRegion.countries;
    this.selectionRegion = this.serviceCountries.cacheStore.byRegion.region;
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
