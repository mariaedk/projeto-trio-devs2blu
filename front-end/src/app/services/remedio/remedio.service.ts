import { Remedio } from './../../models/remedio/remedio';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  urlApiRemedio = `${environment.urlApi}/remedio`;

  constructor(private http: HttpClient) { }

  getRemedios()
  {
    return this.http.get<Remedio[]>(this.urlApiRemedio);
  }

  getRemedioById(id: number)
  {
    return this.http.get<Remedio>(`${this.urlApiRemedio}/${id}`);
  }

  postRemedio(remedio: Remedio)
  {
    return this.http.post<Remedio>(this.urlApiRemedio, remedio);
  }

  updateRemedio(remedio: Remedio)
  {
    return this.http.put<Remedio>(this.urlApiRemedio, remedio);
  }

  deleteRemedio(id: number)
  {
    return this.http.delete<boolean>(`${this.urlApiRemedio}/${id}`);
  }
}
