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

  users: User = new User();

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  getUsers(){
    return this.resumeService.getUsers().subscribe(data =>{  
      this.users =data.user;   
      })  
  }
}
