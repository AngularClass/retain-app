import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { App } from './app';

bootstrap(App, [
  disableDeprecatedForms(),
  provideForms()
]);
