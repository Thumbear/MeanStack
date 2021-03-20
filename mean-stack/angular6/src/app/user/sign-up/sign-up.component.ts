import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from '../../shared/user.service'
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'], 
  providers :[UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  ServerErrorMessages: '';
  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }
  onsubmit(form : NgForm ){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form); 
       },
      err => {
        if (err.status == 422) {
          this.ServerErrorMessages = err.error.join('<br/>');
        }
        else {
          this.ServerErrorMessages += "something Error";
        }
      }
    )
  }
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      nohp: '',
      alamat: ''
    }; 
    form.resetForm();
    this.ServerErrorMessages = '';
  
    }
  }

