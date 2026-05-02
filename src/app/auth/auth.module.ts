import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { ChangePassComponent } from './change-pass/change-pass.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    NewPinComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
