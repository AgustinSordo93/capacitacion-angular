import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductoService {

    private _url : string = 'http://localhost:8099/productos';
    
    constructor(
        private _httpClient : HttpClient
    ) {}
    
    getAll() : Observable<Array<Producto>> {
        return this._httpClient.get<Array<Producto>>(this._url);
    }

    getById(id : number) {
        return this._httpClient.get<Producto>(this._url + '/' + id);
    }

    save(producto : Producto) {
        return this._httpClient.post<Producto>(this._url, producto);
    }

    delete(id : number) {
        return this._httpClient.delete<Producto>(this._url + '/' + id);
    }


}