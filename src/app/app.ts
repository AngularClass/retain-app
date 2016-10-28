import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {}
