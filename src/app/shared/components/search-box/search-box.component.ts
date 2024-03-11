import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

  // Subject viene de rxjs -> reactivo
  private debouncer: Subject<string> = new Subject<string>();

  //! creamos nuestro ViewChild para obtener el valor
  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;


  @Input()
  public placeholder: string = "";

  @Output()
  public searchByCapital: EventEmitter<string> = new EventEmitter();

  // Lo usamos para la implementación de subject
  ngOnInit(): void {
    this.debouncer
        .pipe(
          debounceTime(1000)
        )
        .subscribe( value => {
          this.searchByCapital.emit(value);
        })
  }


  /* public emitEventInput = (): void => {
    //! Ya no lo usamos para el emit
    let searchCapital: string = this.txtInput.nativeElement.value;
    console.log("desde searchBox",searchCapital);
    this.searchByCapital.emit(searchCapital);
    this.txtInput.nativeElement.value = "";
  } */

  public onKeyPress = ( searchTerm: string ) => {
    this.debouncer.next( searchTerm );
  }

}
