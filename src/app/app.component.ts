import { Component, OnInit } from '@angular/core';

export type num = number;
// primative type

// complex type
export type Student = {
  firstname: string;
  lastname?: string; // required
  do?(): void; // optional
};

// typelar aynı isimde tanımlanamaz ve typelarda extend olayı yok onun intersect dediğimi genişleme mantığı var

// export type Student {

// }

export type SpecialStudent = {
  studentNumber: string;
};

// interface de bir primative type tanımı yok, complex type tanımı var.
// aynı isimde başka interface oluşturabiliriz
// interfaclerde birleşim özelliği söz konusu
// aynı isimde bir interface başka dosyadan da yeni özellikler eklenerek genişletilebilir
export interface IPerson {
  fname: string;
  lname: string;
}

export interface IPerson {
  age?: number;
}

// Interfaclerde extend özelliği var.
// data-binding ile apidan çekilen verilen dtoların karşılığını interface olarak tanımlıyorum

// config, formState işlemi gibi basit sadece o sayfayı iglendiren bir model varsa type kullanıyorum

export interface ITeacher extends IPerson {
  socialNumber: number;
}

export enum States {
  Completed,
  NotCompleted,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'AngularIntro'; // küçük tanımlamalar değişiken
  number: number = 5; // stack bölgesinde çalır. // Number Heap bölgesinde çalışna bir değişken number tipinde bir değişken.
  isIntiger: boolean | undefined; // union type
  isInteger1!: boolean; // union type gibi uyguladık ! undefined da olabilir
  student: Student = {
    firstname: 'ali',
    lastname: 'can',
  };

  IsCompleted: any; // js her tipi karşılık olarak alabilir.

  // any tanımlanmış değerler, hem arayüzden hemde component içerisinde intellisense ile erişimi ve takibi zor. bu sebeple mümkün olduğunca kullanmamaya özen göstermemiz lazım.
  dog: any = {
    voice: 'hav',
  };

  person: IPerson = {
    fname: 'can',
    lname: 'hasan',
    age: 12,
  };

  t: ITeacher = {
    fname: 'hasan',
    lname: 'yun',
    age: 23,
    socialNumber: 23432,
  };

  // extend etme olayına intersection işlemi diyoruz
  sStudent: Student & SpecialStudent = {
    studentNumber: '324324',
    firstname: 'harun',
    lastname: 'cenk',
  };

  generate(): void {
    this.number = Number.MIN_VALUE; // Minimumda number için tanımlamış değer.
    this.isInteger1 = Number.isInteger(this.number);

    Number.isInteger(this.IsCompleted);
    Boolean(this.IsCompleted);

    // primative number,string, boolean, undefined,
    // js array ve function object type complex type

    // this.student.
    // this.dog.
  }
}
