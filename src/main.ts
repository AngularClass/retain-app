import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, FORM_PROVIDERS } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { App, providers, routes } from './app';

bootstrap(App, [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideRouter(routes),
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  ...providers
]);
