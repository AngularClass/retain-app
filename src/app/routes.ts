import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' 
import { Main, Notes, About } from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: Main,
    children: [
      { path: '', component: Notes },
      { path: 'about', component: About }
    ]
  },
  { path: '**', redirectTo: '' }
]);
