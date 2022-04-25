import { AppModule } from './app/app.module';
// main app entry point
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}
console.log('x');
platformBrowserDynamic().bootstrapModule(AppModule);
