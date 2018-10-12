import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modules/usuario';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  usuariosList: Usuario[];
  usuariosListFiltrada: Usuario[];
  editState: boolean;
  @ViewChild('btnClose') btnClose: ElementRef;
  nuevo: any = {
    'name': '',
    'phone': '',
    'email': '',
    'idNumber': '',
  };
  filtro: any = {
    'name': '',
    'phone': '',
    'email': '',
    'idNumber': '',

  };
  constructor(public authService: AuthService, public router: Router, private usuarioService: UsuarioService) {

   }


  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
      }
    });
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuariosList = usuarios;
      this.usuariosListFiltrada = usuarios;
    });
 

  }
  filtrar() {
    this.usuariosListFiltrada = this.usuariosList.filter(usuario =>
      (usuario.name.indexOf(this.filtro.name) > -1) &&
      (usuario.phone.indexOf(this.filtro.phone) > -1) &&
      (usuario.email.indexOf(this.filtro.email) > -1) &&
      (usuario.idNumber.indexOf(this.filtro.idNumber) > -1)
    );

  }

  onNewSubmit(form) {
    const mensaje = this.validaciones();
    if (mensaje === '') {
      if (this.editState) {
        this.usuarioService.updateUsuario(this.nuevo);
        this.editState = false;
        alert('Empleado actualizado exitosamente');
      } else {
        this.usuarioService.addUsuario(this.nuevo);
        alert('Empleado Creado exitosamente');
        this.authService.registerUser(this.nuevo.email, this.nuevo.pass1);
      }
      this.nuevo = {
        'name': '',
        'phone': '',
        'email': '',
        'idNumber': '',
      };
      this.btnClose.nativeElement.click();
    } else {

      alert(mensaje);

    }

  }

  deleteUsuario(event, usuario) {
    const response = confirm('está seguro que desea eliminar este empleado?');
    if (response) {
      this.usuarioService.deleteUsuario(usuario);
      alert('Empleado eliminado exitosamente');
    }
    return;
  }

  editUsuario(event, usuario) {
    this.editState = !this.editState;
    this.nuevo = usuario;
  }

  newUsuario() {
    this.nuevo = {
      'name': '',
      'phone': '',
      'email': '',
      'idNumber': '',
    };
  }

  validaciones() {
    let mensaje = '';
    if (this.nuevo.name === '') {
      mensaje += 'El campo de nombre de usuario está vacío.';
    }
    if (this.nuevo.phone === '') {
      mensaje += 'El campo de teléfono está vacío.';
    }
    if (this.nuevo.email === '') {
      mensaje += 'El campo de correo electrónico está vacío.';
    }
    if (this.nuevo.idNumber === '') {
      mensaje += 'El campo de identificación está vacío.';
    }
    if (this.nuevo.email.indexOf('@') < 0 || (this.nuevo.email.substr(this.nuevo.email.length - 5).indexOf('.')) < 0) {
      mensaje += 'El correo electrónico no es valido ';
    }
    return mensaje;
  }

}
