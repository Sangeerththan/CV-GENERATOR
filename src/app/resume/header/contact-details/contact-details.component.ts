import { Component, OnInit } from '@angular/core';
import {User} from '../../../user';
import { ResumeService } from '../../../core/services/resume.service';  


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

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
