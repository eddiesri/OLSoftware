import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument} from '@angular/fire/firestore';

import { Usuario } from '../modules/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class UsuarioService {
  usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  usuariosDoc: AngularFirestoreDocument<Usuario>;

  constructor(public afs: AngularFirestore) {
    this.usuariosCollection = this.afs.collection('Usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getUsuarios() {
    return this.usuarios;
  }

  addUsuario(usuario: Usuario) {
    this.usuariosCollection.add(usuario);
  }

  deleteUsuario(usuario: Usuario) {
    this.usuariosDoc = this.afs.doc(`Usuarios/${usuario.id}`);
    this.usuariosDoc.delete();
  }

  updateUsuario(usuario: Usuario) {
    this.usuariosDoc = this.afs.doc(`Usuarios/${usuario.id}`);
    this.usuariosDoc.update(usuario);
  }
}
