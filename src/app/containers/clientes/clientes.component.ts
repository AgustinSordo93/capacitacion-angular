import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.services';
import { Cliente } from '../../models/cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  
  cliente : Cliente = new Cliente()
  clientes : Array<Cliente> = new Array<Cliente>();
  constructor(
    private _clienteService : ClienteService
  ) {}

  ngOnInit() {
  }
  loadClientes(){
    this._clienteService.getAll()
    .subscribe(( clientes : Array<Cliente>) =>{
    this.clientes = clientes;
   });
  }

  aceptar (cliente : Cliente) {
    this._clienteService.save(cliente)
      .subscribe((cliente : Cliente) => {
        this.cliente = new Cliente();
        this.loadClientes();
      });
  }


  cancelar(){
    this.cliente = new Cliente();
  }
  modificar (cliente : Cliente){
    this.cliente = cliente;
  }
  
  borrar(cliente : Cliente){
    this._clienteService.delete(cliente.id)
      .subscribe(() => {
        this.loadClientes();
      })
  }
    
}
