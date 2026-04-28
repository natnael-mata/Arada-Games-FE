import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import LoginResponse from './sign-in/login-response';
// import { ForgotPasswordResponse, User } from './user';
import { Router } from '@angular/router';
const url = environment.baseUrl + 'open/auth/';
const authUrl = environment.baseUrl + 'auth/';
const profileUrl = environment.baseUrl + 'profile';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }
  isLoggedIn() {
    return !!localStorage.getItem('access_token');
  }

  // login(data) {
  //   return this.http.post<LoginResponse>(url + 'login', data);
  // }

  // decodedToken() {
  //   return this.helper.decodeToken(this.tokenGetter());
  // }

  // permissions() {
  //   return localStorage.getItem('permissions').split(',');
  // }


  tokenSetter(token: string) {
    localStorage.setItem(
      'permissions',
      JSON.parse(this.helper.decodeToken(token).permissions).map(
        (permission: { permissionName: string }) => permission.permissionName
      )
    );
    return localStorage.setItem('access_token', token);
  }

  // me() {
  //   return this.http.get<User>(url + 'me');
  // }

  // logout() {
  //   return this.http.post(url + '/logout', {
  //     token: localStorage.getItem('access_token'),
  //   });
  // }

  // isAdmin() {
  //   return JSON.parse(localStorage.getItem('user')).role.name == 'ADMIN';
  // }

  tokenGetter() {
    return localStorage.getItem('access_token');
  }

  // changePassword(value: any) {
  //   return this.http.post(url + 'change-password', value);
  // }

  // isActive() {
  //   return JSON.parse(localStorage.getItem('user'))?.active;
  // }

  // phoneConfirmation(data: any) {
  //   return this.http.post<LoginResponse>(url + 'phone-confirmation', data);
  // }

  // sendOTPAgain() {
  //   //send again.
  // }

  // resetPasswordConfirmation(param: any) {
  //   return this.http.post(url + 'reset-password-verification', param);
  // }

  // forgotPassword(value: string) {
  //   return this.http.get<ForgotPasswordResponse>(
  //     url + 'forgot-password?phone=' + value
  //   );
  // }

  // resetPassword(value: any) {
  //   return this.http.post(url + 'reset-password', value);
  // }

  // canAccess(request: string) {
  //   return this.permissions().includes(request);
  // }

  // getAllPermission() {
  //   return this.http.get(authUrl + 'permission');
  // }

  // getUserPermission(roleId: number) {
  //   return this.http.get(authUrl + 'role/findRolePermissions?roleId=' + roleId);
  // }
}
