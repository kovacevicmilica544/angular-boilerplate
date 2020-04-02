import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/security/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: `./modules/auth/auth.module#AuthModule`,
  },

  {
    path: 'app',
    canActivate: [AuthGuard],
    loadChildren: `./modules/dashboard/dashboard.module#DashboardModule`,
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
