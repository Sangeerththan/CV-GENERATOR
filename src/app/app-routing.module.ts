import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'resume', component:ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
