import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public uidUsuario: string;

  constructor(public authService: AuthService, public router: Router ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {

      if (auth) {
        this.isLogin       = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario  = auth.email;
        this.uidUsuario    = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
  }
  onClickLogOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
