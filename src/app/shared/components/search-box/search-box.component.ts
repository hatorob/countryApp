import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  // Subject viene de rxjs -> reactivo
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  //! creamos nuestro ViewChild para obtener el valor
  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;


  @Input()
  public placeholder: string = "";

  @Input()
  public initialValue: string = "";

  @Output()
  public searchByTerm: EventEmitter<string> = new EventEmitter();

  // Lo usamos para la implementación de subject
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
        .pipe(
          debounceTime(1000)
        )
        .subscribe( value => {
          this.searchByTerm.emit(value);
        })
  }


  ngOnDestroy(): void {
    //! Destruir la suscripción de mi subscribe
    this.debouncerSuscription?.unsubscribe();
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
