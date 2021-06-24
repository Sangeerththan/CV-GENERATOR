import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ResumeService } from '../../../core/services/resume.service';  
import {User} from '../../../user';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // projects: Array<Project> =[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
  }

  // getProjects(id: number){
  //   return this.resumeService.getProjects(id).subscribe(data =>{  
  //     this.user = data;   
  //     })  
  // }
}
