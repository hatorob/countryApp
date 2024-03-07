import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor (
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private serviceCountry: CountriesService,
  ) {

  }


  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.serviceCountry.searchCountryById(id))
        )
        .subscribe( (country) => {
          if( !country ) return this.router.navigateByUrl('');
          return this.country = country;
        });
  }

  //! Primera manera de hacerlo, el tema es que tenemos dos subscribe y podemos obtimizarlo mejor
  /* ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => {
      this.serviceCountry.searchCountryById( id )
          .subscribe( country => {
            console.log("country desde page",country);
          });
    });
  } */

  //! Otra manera de hacerlo
  /*
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => {
      this.searchCountry(id);
    });
  }

  public searchCountry = ( code: string ) => {
    this.serviceCountry.searchCountryById( code )
          .subscribe( country => {
            console.log("country desde page",country);
          });
  }
  */

}
