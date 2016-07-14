import { Component } from '@angular/core';
import { AppBar } from '../ui/app-bar';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'main-container',
  directives: [
    AppBar,
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
         <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class Main {}
