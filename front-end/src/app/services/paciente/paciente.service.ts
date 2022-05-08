import { Paciente } from './../../models/paciente/paciente';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  urlApiPaciente = `${environment.urlApi}/paciente`;

  constructor(private http: HttpClient) { }

  getPacientes()
  {
    return this.http.get<Paciente[]>(this.urlApiPaciente);
  }

  getPacienteById(id: number)
  {
    return this.http.get<Paciente>(`${this.urlApiPaciente}/${id}`);
  }

  postPaciente(paciente: Paciente)
  {
    return this.http.post<Paciente>(this.urlApiPaciente, paciente);
  }

  updatePaciente(paciente: Paciente)
  {
    return this.http.put<Paciente>(this.urlApiPaciente, paciente);
  }

  deletePaciente(id: number)
  {
    return this.http.delete<boolean>(`${this.urlApiPaciente}/${id}`);
  }
}
