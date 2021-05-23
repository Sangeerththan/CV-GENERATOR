import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:"", component:ResumeComponent, pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'resume', component:ResumeComponent},
  { path:'useredit', component:ContactInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
