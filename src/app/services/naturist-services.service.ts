import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaturistModel } from '../model/naturist.model';

@Injectable({
  providedIn: 'root'
})
export class NaturistServices {

  constructor(private http: HttpClient) { }

  url = 'https://mauro-naturistbackend.onrender.com'

  //list all information about products
  listProducts(): Observable<NaturistModel[]>{
    let way = `${this.url}/naturist`
    return this.http.get<NaturistModel[]>(way)
  }
}
