import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  //! creamos nuestro ViewChild para obtener el valor
  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;


  @Input()
  public placeholder: string = "";

  @Output()
  public searchByCapital: EventEmitter<string> = new EventEmitter();

  public emitEventInput = (): void => {
    let searchCapital: string = this.txtInput.nativeElement.value;
    console.log("desde searchBox",searchCapital);
    this.searchByCapital.emit(searchCapital);
    this.txtInput.nativeElement.value = "";
  }

}
