import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

@Injectable()
export class ClienteService {

    private _url : string = 'http://localhost:8099/clientes';
    
    constructor(
        private _httpClient : HttpClient
    ) {}
    
    getAll() : Observable<Array<Cliente>> {
        return this._httpClient.get<Array<Cliente>>(this._url);
    }

    getById(id : number) {
        return this._httpClient.get<Cliente>(this._url + '/' + id);
    }

    save(cliente : Cliente) {
        return this._httpClient.post<Cliente>(this._url, cliente);
    }

    delete(id : number) {
        return this._httpClient.delete<Cliente>(this._url + '/' + id);
    }


}