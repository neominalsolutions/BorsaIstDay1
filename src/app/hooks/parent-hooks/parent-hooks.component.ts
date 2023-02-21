import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildHooksComponent } from '../child-hooks/child-hooks.component';

@Component({
  selector: 'borsa-ist-parent-hooks',
  templateUrl: './parent-hooks.component.html',
  styleUrls: ['./parent-hooks.component.css'],
})
export class ParentHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string = '';
  counter: number = 0;
  childIsVisible: boolean = true;

  constructor() {}

  // ngOnChanges çalışması için input vasıtası ile veri gönderilmeli.

  // parent component içindeki child componenti yakalamak için viewchild decorator kullandık.
  @ViewChild('child') childElement!: ChildHooksComponent;
  @ContentChild('content') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    // parent component child component arasında input vasıtası ile bir veri aktarımı olduğu durumlarda, input değişiminde önceki ve şuanki değişiklikleri yakalamamızı sağlayan hook.
    // console.log('parent-on-changes', changes);
  }

  ngOnInit(): void {
    // component view yüklemeden önce çalışan api call işlemleri yaptığımız yada observable olan servicelere subscribe olduğumu view için gerekli olan modeli yüklediğimiz hook.
    // console.log('ngOnInit', this.childElement);
  }

  ngDoCheck(): void {
    // dirty check dediğimiz component üzerinde ilk açılışta olmak üzere ilk açılıştan sonra bir event veya model de bir değişiklik olduğunda her seferinde tetiklenip component check eden bir hook.
    // her işlemde tetiklendiği için bunun içerisinde bir operasyon yapmak çok önerilmez.
    // Incremental DOM üzerindeki değişiklikleri algıladıktan sonraki component doma basmadan önceki kontrol kısmı
    this.counter++;
    // console.log('ngDoCheck', this.counter);
    // sayfa ilk açılışında componenti kontrol etmek için 1 kereye mahsus giriyor.
  }

  ngAfterContentInit(): void {
    // ng-content ile bir component'e bir content geçişi sağlıyabiliriz. bu content değerine ulaşmak istersek bu hook üzerinden erişim sağlayabiliriz.
    // @ContentChild() denilen bir decorator vasıtası ile ulaşırız.
    console.log('ngAfterContentInit', this.content);
  }

  ngAfterContentChecked(): void {
    // ngAfterContentInit sonrası tetiklenir.
    // ng-content üzerindeki değişiklikleri kontrol etmek için kullanılan bir hook.
    // burada performans açısından kod geliştirmesi yapmamaya özen göstermemiz lazım.
    // console.log('ngAfterContentChecked', this.content);
  }

  ngAfterViewInit(): void {
    // component'e child olarak bir component ekledyebiliyoruz.
    // parent component içerisinde child component referansı eklendiği durumlarda child component referansına erişmemizi sağlayan hook
    // @ViewChild() decorator ile bunu gerçekleştirebiliriz.
    console.log('ngAfterViewInit', this.childElement);
  }

  ngAfterViewChecked(): void {
    // Parent Component içerisinde child olarak referans verilen componentlerde bir değişik durumu var mı bunu kontrol eden bir hook.
    // Performans açısında bu hook da bir geliştirme yapmayı tavsiye etmeyiz.
    // console.log('ngAfterViewChecked', this.childElement);
  }

  ngOnDestroy(): void {
    // component domdan ayrılırken (*ngIf yada Routing ile yönlendirme işlemlerinde) bu component içerisinde tanımlanmış kaynakları ortadan kaldırmak, temizlemek amaçlı kullanılan bir hook.
    // component için setInterval varsa clearInterval yapılır,
    // Component Observable bir service ile subscribe olunduysa unsubscribe yapılır.
    // Bir süre sonra temizlik yapmazsak Memory Leak hataları ile karşılaşırız.
    // console.log('ngOnDestroy');
  }

  onClick() {
    // sadece event çalışıyor docheck bu durumdan da etkileniyor
    alert('clicked');
  }
}
