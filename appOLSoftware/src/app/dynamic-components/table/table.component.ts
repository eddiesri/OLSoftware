import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  usuarios: any[] = [];
  filtro: any = {
    nombres         : '',
    apellidps       : '',
    identificacion  : '',
    rolAsociado     : '',
    estado          : '',
    telefono        : '',
    email           : ''
  };
  constructor( public authService: AuthService , public router: Router, public usuarioService: UsuarioService ) {}


  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (!auth) {
        this.router.navigate(['/login']);
      }
    });
  }
  onFilterSubmit(usuarioform) {
    console.log();
  }
  onNewSubmit() {
    console.log();

  }

}
