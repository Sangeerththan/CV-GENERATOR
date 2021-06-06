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

  user: User = new User();

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getUsers(1);
  }

  getUsers(id: number){
    return this.resumeService.getUsers(id).subscribe(data =>{  
      this.user = data;   
      })  
  }
}
