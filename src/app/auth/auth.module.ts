import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SyncTelebirrComponent } from './sync-telebirr/sync-telebirr.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePassComponent } from './change-pass/change-pass.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SyncTelebirrComponent,
    NewPinComponent,
    SignUpComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
