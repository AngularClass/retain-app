import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, FORM_PROVIDERS } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { App, providers } from './app';

bootstrap(App, [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  ...providers
]);
