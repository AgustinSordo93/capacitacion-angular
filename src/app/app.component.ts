import { Component } from '@angular/core';
import { ClienteService } from '../../src/app/services/cliente.services';
import { Cliente } from './models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(
  ) {}

  ngOnInit() {

    }
  
}
