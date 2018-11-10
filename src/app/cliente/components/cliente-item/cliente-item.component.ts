import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../models/cliente'
@Component({
  selector: 'cliente-item',
  templateUrl: './cliente-item.component.html',
  styleUrls: ['./cliente-item.component.css']
})
export class ClienteItemComponent implements OnInit {

  @Input ('cliente') cliente : Cliente = new Cliente();
  @Output('modificar') modificarEvent : EventEmitter<Cliente>= new EventEmitter<Cliente>();
  @Output('borrar') borrarEvent: EventEmitter<Cliente> = new EventEmitter<Cliente>();
  constructor() { }

  ngOnInit() {
  }
  modificar (){
    this.modificarEvent.emit(this.cliente)
  }
  borrar (){
    this.borrarEvent.emit(this.cliente)
  }

}
