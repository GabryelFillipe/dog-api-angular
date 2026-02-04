//ferramenta do angular para relizar requisições http
import { HttpClient } from '@angular/common/http';
//Essa classe pode ser injetada em outros lugares
import { Injectable, inject } from '@angular/core';
//Lida com dados assicronas
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Responsavel por realizar a requisição na api dog
export class Dog {
  // HttpClient seria o semelhante do fetch 
  private http = inject(HttpClient)

  private apiUrl = 'https://dog.ceo/api/breed'

  buscarImagemPorRaca(raca: string): Observable<any> {
    const url = `${this.apiUrl}/${raca.toLowerCase()}/images`
    
    return this.http.get<any>(url)
  }
}