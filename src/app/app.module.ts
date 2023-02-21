import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent-childs/parent/parent.component';
import { ChildComponent } from './parent-childs/child/child.component';
import { ParentHooksComponent } from './hooks/parent-hooks/parent-hooks.component';
import { ChildHooksComponent } from './hooks/child-hooks/child-hooks.component';
import { InputDemoComponent } from './input-model-binding/input-demo/input-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    ParentHooksComponent,
    ChildHooksComponent,
    InputDemoComponent,
  ],
  imports: [BrowserModule, FormsModule],
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
