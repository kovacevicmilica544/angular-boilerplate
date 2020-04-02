import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';

const COMPONENTS = [
  DashboardComponent,
  UsersComponent,
  HomeComponent
];

const MODULES = [
  DashboardRoutingModule,
  SharedModule,
];

const SERVICES = [
  UserService
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [...SERVICES]
})
export class DashboardModule { }
