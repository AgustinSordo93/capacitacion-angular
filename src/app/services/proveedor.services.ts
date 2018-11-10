import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProveedorService {

    private _url : string = 'http://localhost:8099/proveedor';
    
    constructor(
        private _httpClient : HttpClient
    ) {}
    
    getAll() : Observable<Array<Proveedor>> {
        return this._httpClient.get<Array<Proveedor>>(this._url);
    }

    getById(id : number) {
        return this._httpClient.get<Proveedor>(this._url + '/' + id);
    }

    save(proveedor : Proveedor) {
        return this._httpClient.post<Proveedor>(this._url, proveedor);
    }

    delete(id : number) {
        return this._httpClient.delete<Proveedor>(this._url + '/' + id);
    }


}