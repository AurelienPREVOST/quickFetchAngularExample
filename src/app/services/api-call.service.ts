import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // Ajoutez vos informations d'identification et en-têtes ici
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer VOTRE_TOKEN',
    //   'Custom-Header': 'VOTRE_VALEUR'
    // });

    // Ajoutez les headers à la requête HTTP
    // return this.http.get<any>('https://fakestoreapi.com/products', { headers: headers });
    return this.http.get<any>('https://fakestoreapi.com/products');
  }
}


