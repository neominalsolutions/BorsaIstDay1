import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'borsa-ist-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // parent componetten child componente gönderilen değerler
  @Input() names: string[] = [];
  // child component de bir değer değişimi sonucunda parent componente bir value emit etmemizi sağlayan event driven yöntem
  @Output() nameAdded: EventEmitter<string> = new EventEmitter<string>();

  addName(inputRef: HTMLInputElement) {
    console.log('inputRef', inputRef);
    this.names.push(inputRef.value);
    this.nameAdded.emit(inputRef.value); // listen edilmek için invoke ettik. event ile çalıştık.
    inputRef.value = '';
  }

  // parent üzerinden bu methodun tetiklenip names değerlerini temizlenmesini istiyorum.
  clearNames() {
    this.names = [];
  }
}
