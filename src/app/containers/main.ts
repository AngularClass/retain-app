import { Component } from '@angular/core';

@Component({
  selector: 'main-container',
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
