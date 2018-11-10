import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ClienteModule } from './cliente/cliente.module'
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';
import { ClienteService } from './services/cliente.services';
import { ClientesComponent } from './containers/clientes/clientes.component';

const appRoutes : Routes = [
  {path: 'clientes', component : ClientesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ClienteModule,
    MainModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
