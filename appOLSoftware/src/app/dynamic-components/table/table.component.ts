import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  usuarios: any[] = [];
  nuevo: any = {
    nombres         : '',
    apellidps       : '',
    identificacion  : '',
    rolAsociado     : '',
    estado          : '',
    contrasena      : '',
    telefono        : '',
    email           : ''
  };
  filtro: any = {
    nombres         : '',
    apellidps       : '',
    identificacion  : '',
    rolAsociado     : '',
    estado          : '',
    telefono        : '',
    email           : ''
  };
  constructor() { }

  ngOnInit() {
  }
  onFilterSubmit(){}
  onNewSubmit(){}

}
