import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    email: '',
    pass: ''
  };
  constructor( public authService: AuthService , public router: Router) {}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.router.navigate(['/tabla']);
      }
    });
  }
  onSubmitLogin() {
    this.authService.logIn(this.user.email , this.user.pass).then((res) => {
      console.log('res' , res);
      this.router.navigate(['/tabla']);
    }).catch((err) => {
      console.log('err' , err);
    });
  }
}
