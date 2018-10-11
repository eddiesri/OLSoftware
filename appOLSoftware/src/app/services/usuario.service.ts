import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../modules/usuario';

@Injectable()
export class UsuarioService {
  usuariosList: AngularFireList<any>;
  selectUsuario: Usuario = new Usuario();

  constructor(private angFDB: AngularFireDatabase) { }

  getUsuarios() {
    return this.usuariosList = this.angFDB.list('usuarios');
  }

  insertUsuario(usuario: Usuario) {
    this.usuariosList.push({
      $key: usuario.$key ,
      name: usuario.name ,
      email: usuario.email ,
      identificacion: usuario.identificacion ,
      tipoId: usuario.tipoId ,
      pass1 : usuario.pass1,
      pass2 : usuario.pass2
    });
  }

  updateUsuario(usuario: Usuario) {
    this.usuariosList.update(usuario.$key , {
      $key: usuario.$key ,
      name: usuario.name ,
      email: usuario.email ,
      identificacion: usuario.identificacion ,
      tipoId: usuario.tipoId ,
      pass1 : usuario.pass1,
      pass2 : usuario.pass2
    });
  }

  deleteUsuario($key: string) {
    this.usuariosList.remove($key);
  }

}
