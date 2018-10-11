import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  onSubmitAddUser() {
      if (this.user.email !== '' && this.user.pass1 !== '') {
        this.authService.registerUser(this.user.email, this.user.pass1).then((res) => {
          this.flashmsgs.show('Creación Exitosa', { ccsClass: 'alert alert-success', timeout: 4000 });
          this.router.navigate(['/login']);
        }).catch((err) => {
          console.log('err', err);
        });
      } else {
        this.flashmsgs.show('Campos Vacíos', { ccsClass: 'alert-warning', timeout: 4000 });

      }
  }
  constructor( public authService: AuthService , public router: Router , public flashmsgs: FlashMessagesService) {}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.router.navigate(['/tabla']);
      }
    });
  }

}
