import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dog {
  private http = inject(HttpClient)

  private apiUrl = 'https://dog.ceo/api/breed'

  buscarImagemPorRaca(raca: string): Observable<any> {
    const url = `${this.apiUrl}/${raca.toLowerCase()}/images/random/9`
    
    return this.http.get<any>(url)
  }
}