import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';

const SERVICES = [];

const COMPONENTS = [
  SignInComponent,
  SignUpComponent,
  AuthComponent
];

const MODULES = [
  AuthRoutingModule,
  SharedModule
];

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [...MODULES],
  providers: [...SERVICES]
})
export class AuthModule { }
