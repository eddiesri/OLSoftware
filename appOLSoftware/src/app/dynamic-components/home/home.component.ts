import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLogin: boolean;
  public emailUsuario: string;
  constructor(public authService: AuthService) { }

  ngOnInit( ) {
    this.authService.getAuth().subscribe( auth => {

      if (auth) {
        this.isLogin       = true;
        this.emailUsuario = auth.email;

      } else {
        this.isLogin = false;
      }
    });
  }

}
