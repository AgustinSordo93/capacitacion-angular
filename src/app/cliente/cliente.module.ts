import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteItemComponent } from './components/cliente-item/cliente-item.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';

@NgModule({
  declarations: [ClienteFormComponent, ClienteItemComponent, ClienteListaComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports :[
    ClienteFormComponent,
    ClienteListaComponent
  ]
})
export class ClienteModule { }
