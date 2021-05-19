import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './resume/header/header.component';
import { ContentComponent } from './resume/content/content.component';
import { FooterComponent } from './resume/footer/footer.component';
import { ExperienceComponent } from './resume/content/experience/experience.component';
import { ProjectsComponent } from './resume/content/projects/projects.component';
import { EducationComponent } from './resume/content/education/education.component';
import { AchievementsComponent } from './resume/content/achievements/achievements.component';
import { LanguagesComponent } from './resume/content/languages/languages.component';
import { SkillsComponent } from './resume/content/skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './resume/header/contact-details/contact-details.component';
import { LoginComponent } from './core/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { ResumeInfoComponent } from './user/resume-info/resume-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResumeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    AchievementsComponent,
    LanguagesComponent,
    SkillsComponent,
    ContactDetailsComponent,
    LoginComponent,
    ContactInfoComponent,
    ResumeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
