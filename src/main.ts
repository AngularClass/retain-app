import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app/app'

@NgModule({
  declarations: [App],
  imports: [BrowserModule],
  bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
