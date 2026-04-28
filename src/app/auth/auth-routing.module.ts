import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SyncTelebirrComponent } from './sync-telebirr/sync-telebirr.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  // {
  //   path: 'sync-telebirr',
  //   component: SyncTelebirrComponent,
  // },
  {
    path: 'new-pin',
    component: NewPinComponent,
  },
    {
    path: 'sign-up',
    component: SignUpComponent,
  },
    {
    path: 'change-pass',
    component: ChangePassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
