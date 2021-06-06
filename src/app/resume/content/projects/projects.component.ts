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

<<<<<<< HEAD
  user: User = new User();
=======
  // users: User = new User();
   users:any[]=[]
>>>>>>> 70b144c44071581d82f4dbab15796b6e88f6629c

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.getUsers(1);
  }

  getUsers(id: number){
    return this.resumeService.getUsers(id).subscribe(data =>{  
      this.user = data;   
=======
    // this.users = this.getUsers();
    this.getUsers();
  }

  getUsers(){
    return this.resumeService.getUsers().subscribe(data =>{  
      this.users =data;   
      console.log("users",this.users);
>>>>>>> 70b144c44071581d82f4dbab15796b6e88f6629c
      })  
  }
}
