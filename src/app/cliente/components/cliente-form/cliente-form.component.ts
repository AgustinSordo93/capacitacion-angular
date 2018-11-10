import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../models/cliente'

@Component({
  selector: 'cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  @Input('cliente') cliente = new Cliente();
  @Output('aceptar') aceptarEvent : EventEmitter<Cliente> = new EventEmitter<Cliente>();
  @Output('cancelar') cancelarEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  aceptar(){
    this.aceptarEvent.emit(this.cliente);
  }
  cancelar(){
    this.cancelarEvent.emit();
  }

  valido():boolean {
    return (
      this.cliente == null||
      this.cliente.nombre == null ||
      this.cliente.nombre == '' ||
      this.cliente.apellido == null ||
      this.cliente.apellido == '' ||
      this.cliente.telefono == null ||
      this.cliente.telefono == ''
    );
  }
}
