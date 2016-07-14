import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, FORM_PROVIDERS } from '@angular/forms';
import { App } from './app';

bootstrap(App, [
  ...FORM_PROVIDERS,
  disableDeprecatedForms()
]);
