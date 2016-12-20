import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main } from './app/containers';

@NgModule({
  declarations: [
    App,
    Main
  ],
  imports: [BrowserModule],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
