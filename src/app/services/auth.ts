import { Injectable } from '@angular/core';
import { StoreHelper } from './store-helper';
import { Store} from '../store';
import { ApiService } from './api';
import {Observable} from 'rxjs/Observable';
import {CanActivate, Router} from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  JWT: string = '';

  constructor(
     private storeHelper: StoreHelper,
     private api: ApiService,
     private router: Router,
     private store: Store
   ) {
    const token = window.localStorage.getItem(this.JWT_KEY);
    if (token) {
      this.setJwt(token);
    }
  }

  setJwt(jwt: string) {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    this.api.setHeaders({Authorization: `Bearer ${jwt}`});
  }

  isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem(this.JWT_KEY)); 
  }

  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['', 'auth']);
    }
  }

  authenticate(path, creds): Observable<any> {
    return this.api.post(`/${path}`, creds)
      .do((res: any) => this.setJwt(res.token))
      .do((res: any) => this.storeHelper.update('user', res.data))
      .map((res: any) => res.data);
  }

  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.store.purge();
    this.router.navigate(['', 'auth']);
  }
}
