import { Component } from '@angular/core';
import { AppBar } from '../ui/app-bar';
import { Notes } from './notes';

@Component({
  selector: 'main-container',
  directives: [
    AppBar,
    Notes
  ],
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
        <notes-container></notes-container>
      </main>
    </div>
  `
})
export class Main {}
