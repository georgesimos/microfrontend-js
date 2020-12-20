import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare const require: any;
const { dependencies } = require('../../../package.json');
const ngVersion: string = dependencies['@angular/core'];
(window as any).platform = (window as any).platform || {};
let platform: PlatformRef = (window as any).platform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).platform[ngVersion] = platform;
}
platform.bootstrapModule(AppModule).catch((err: any) => console.error(err));
