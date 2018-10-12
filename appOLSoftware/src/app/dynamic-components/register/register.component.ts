import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( public authService: AuthService , public router: Router, public usuarioService: UsuarioService) {}

  public user: any = {
      'name'     :  '' ,
      'phone'    :  '',
      'email'    :  '',
      'idNumber' :  '',
      'pass1'    :  '',
      'pass2'    :  ''
  };

  onSubmitAddUser() {
      const mensaje = this.validaciones();
      if ( mensaje === '' ) {
        this.authService.registerUser(this.user.email, this.user.pass1).then((res) => {
          delete this.user.pass1;
          delete this.user.pass2;
          this.usuarioService.addUsuario(this.user);
          this.router.navigate(['/login']);
          alert('Usuario Creado exitosamente');
        }).catch((err) => {
          alert('No se pudo crear el usuario.');
        });
      } else {
        alert(mensaje);
      }
  }
  validaciones() {
    let mensaje = '';
    if (this.user.name === '') {
      mensaje += 'El campo de nombre de usuario está vacío.';
    }
    if (this.user.phone === '') {
      mensaje += 'El campo de teléfono está vacío.';
    }
    if (this.user.email === '') {
      mensaje += 'El campo de correo electrónico está vacío.';
    }
    if (this.user.idNumber === '') {
      mensaje += 'El campo de identificación está vacío.';
    }
    if (this.user.pass1 === '') {
      mensaje += 'El campo de contraseña está vacío.';
    }
    if (this.user.pass2 === '') {
      mensaje += 'El campo de confirmar contraseña de usuario está vacío.';
    }
    if (this.user.pass1 !== this.user.pass2) {
      mensaje += 'Los Valores de contraseña no coinciden. ';

    }
    if (this.user.pass1.length < 8) {
      mensaje += 'La contraseña debe tener más de 8 caracteres. ';

    }
    if (this.user.email.indexOf('@') < 0  || (this.user.email.substr(this.user.email.length - 5).indexOf('.')) < 0) {
      mensaje += 'El correo electrónico no es valido ';
    }
    return mensaje;
  }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.router.navigate(['/tabla']);
      }
    });
  }

}
