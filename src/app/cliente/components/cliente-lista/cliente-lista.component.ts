import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Cliente} from '../../models/cliente';
@Component({
  selector: 'cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  
  @Input ('clientes') clientes : Array<Cliente> = new Array<Cliente>();
  @Output('modificar') modificarEvent : EventEmitter<Cliente>= new EventEmitter<Cliente>();
  @Output('borrar') borrarEvent: EventEmitter<Cliente> = new EventEmitter<Cliente>();
  constructor() { }

  ngOnInit() {
  }
  modificar(c : Cliente){
    this.modificarEvent.emit(Object.assign({}, c));
  }

  borrar (c : Cliente){
    this.borrarEvent.emit(Object.assign({}, c));

  }

}
