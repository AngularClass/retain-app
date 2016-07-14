import { Component } from '@angular/core';
import { AppBar } from '../ui/app-bar';

@Component({
  selector: 'main-container',
  directives: [
    AppBar
  ],
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
        content will go here
      </main>
    </div>
  `
})
export class Main {}
