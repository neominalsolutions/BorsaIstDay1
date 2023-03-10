import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// declarations bir component module tanımlanacak isek declarations altında olmalı

// declarations kısmında components dışında directive ve pipe tanımıda yapabiliriz.

// imports eğer module ise 3rd module veya custom feature module imports kısmına eklenir.

// bootstrap uygulama ilk ayağa buradan kalkar

// providers module düzeyinde servislerimiz varsa bunlarıda buraya tanımlarız. (localization ayarını module genelinde uygulama istedik, MomentDateAdapter)

// @NgModule,NgComponent declartion işaretme
// Herşey angularda Root üzerinde çalışır.
