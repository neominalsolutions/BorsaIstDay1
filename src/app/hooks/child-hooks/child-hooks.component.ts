import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'borsa-ist-child-hooks',
  templateUrl: './child-hooks.component.html',
  styleUrls: ['./child-hooks.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildHooksComponent
  implements
    AfterContentInit,
    AfterContentChecked,
    OnChanges,
    OnDestroy,
    OnInit
{
  timer: any;
  timer2!: Observable<number>;
  timerSubscription!: Subscription;
  subs!: Array<Subscription>;

  ngOnInit(): void {
    console.log('child-ngOnInit');
    // JS API ile yazılmış bir kod
    this.timer = setInterval(() => {
      console.log('2sn bir çalış');
    }, 2000);

    // rxjs ile yazılmış bir
    this.timer2 = interval(1000);

    // rxjs kullandığımız yerlerde de
    // rxjs de bir değeri takip ettiğimiz durumlarda subscribe olduğumuz durumlarda bu subscriptionları destroy kısmında yok etmemiz lazım yoksa memory leak hatalarına yol açar.
    this.timerSubscription = this.timer2.subscribe((val) => {
      console.log('1sn bir çalış', val);
    });

    // const subs1 = this.timer2.subscribe();
    // this.subs.push(subs1);
  }
  // parent component den gönderilen bir input değişiminde bu hook tetikleniyor. bir önceki ve bir sonraki değer takibine göre bir algoritma yazabiliriz.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child-on-changes', changes);
  }

  @Input() name: string = '';

  @ContentChild('content') content!: ElementRef;

  ngAfterContentInit(): void {
    // bu component içersine gönderilecek content'in yükleme anını yakaladığımız hook.
    console.log('content-init', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('content-checked', this.content);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy-child');
    clearInterval(this.timer);
    this.timerSubscription.unsubscribe();
    // artık bu nesneyi dinlemiyorum.

    // for (const sub of this.subs) {
    //   sub.unsubscribe();
    // }
  }
}
