import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {

  getToken(): String {
    return window.localStorage['accessToken'];
  }

  saveToken(token: String) {
    window.localStorage['accessToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('accessToken');
  }

}
