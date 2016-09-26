import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, routes } from './app'
import { Main, Notes, About } from './app/containers'
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
    ColorPicker,
    About
  ],
  providers: [
    NoteService,
    ApiService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
