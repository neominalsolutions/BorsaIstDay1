import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'borsa-ist-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  // Input OutPut ViewChild tanımlarını da burada yapalım
  // child1 template tarafındaki isim string olarak yazılıd
  // ts tarafındaki isim ise child1Component yazıldı.
  @ViewChild('child1') child1Component!: ChildComponent;

  message!: string;
  data: string[] = ['ali', 'ahmet', 'mehmet'];

  // subject behavior subject

  // public child:ChildComponent ui ile alakası olmayan servicleri constructora enjecte edbiliriz. ama ui ile bağlantılı ise bunun yöntemi viewchild.
  constructor() {
    // component instance alıdığı ram heap bölgesine ref atıldığı yer.
    // console.log('child', child);
    // this.data = [... this.data];
  }

  // async işlemlerde veriyi parent componentlerde çekip veri çekildikten sonra hazır olan dataya göre child componentlerin veriyi bind etmesi kullacı arayüzü açısından daha doğru bir yöntem.

  onNameAdded(event: string) {
    // alert(``);
    this.message = `${event} eklendi !`;
  }

  // parent component içinde bir tetikleme olmadı child component referansı üzerinden bir tetikleme işlemi yaptık.
  clear() {
    this.child1Component.clearNames();
    // this.child.clearNames();
  }
}
