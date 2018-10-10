import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: any = {
      'name' : '' ,
      'typeId' : '',
      'email'  : '',
      'idNumber' : '',
      'pass1'    :  '',
      'pass2'    :  ''
  };
   constructor(public authService: AuthService , public router: Router) { }
  onSubmitAddUser() {
      this.authService.registerUser(this.user.email , this.user.pass1).then((res) => {
      console.log('res' , res);
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log('err' , err);
    });
  }
  ngOnInit() {
  }

}
