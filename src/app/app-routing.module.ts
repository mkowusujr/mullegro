import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/auth/components/login/login.component';
import { RegisterComponent } from './pages/auth/auth/components/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
	{path: 'login', component: LoginComponent} ,
	{path: 'register', component: RegisterComponent},
  {path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
