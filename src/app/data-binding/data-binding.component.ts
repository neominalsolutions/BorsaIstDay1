import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'borsa-ist-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  // angular Input & Output

  // constructor

  //myTitle:Title = new Title(document);
  // bu componentin görevi dışında aslında title service yönetimi görevinide bu componente vermiş oluyor.

  constructor(public title: Title) {
    // constructor injection (dependency injection)
    // class initialize olduğunda tetiklenen method.
    // sadece service injection yapalım. data binding yapmayalım.
    // property value değişikliği yapmayalım.
    this.title.setTitle('data-binding');
    // private olan serviceler ts tarafından erişilebilir.
    // public service viewden erişilmek isterse yapılabilir.
  }

  // property bind etmek için one-way yada two-way {{}} interpolation ile view aktarırız.

  num: number = 0;
  thresholdNumber: number = 10;
  numbers: Array<number> = [5, 10, 15, 20, 25]; // generic collections özelliği kullandık.

  // method tetiklemek için event yöntemi

  increase(): void {
    this.num++;
  }

  decrease(): void {
    if (this.num > 0) this.num--;
  }

  // $event service angularjs den beri angular içerisinde kullanılan bir event tetiklenme sonrasında ilgili element ile ilgili bilgileri taşıyan bir service
  // HostListener ile bir component bir event tanımı yapabiliriz. JS tarafındaki addEventListener ile aynı şey
  @HostListener('mousemove', ['$event'])
  OnMouseMove(event: MouseEvent) {
    console.log('event', event);
  }
}
