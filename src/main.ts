import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err)); // csr, AppModule üzerinden uygulama ayağa kaldır.

// uygulama ilk ayağa kalktığında invoke olan dosya burası
