<<<<<<< HEAD
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { App, providers, routes } from './app';

bootstrap(App, [
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(routes),
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  ...providers
]);
=======
import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app'
import { Main, Notes } from './app/containers'
import { 
  AppBar,
  NoteCard,
  NoteCreator,
  ColorPicker
} from './app/ui'
import {
  NoteService,
  ApiService
} from './app/services'

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    Notes,
    NoteCreator,
    ColorPicker
  ],
  providers: [
    NoteService,
    ApiService
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> module-12
