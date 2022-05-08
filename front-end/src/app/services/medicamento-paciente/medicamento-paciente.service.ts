import { MedicamentoPaciente } from './../../models/medicamento-paciente/medicamento-paciente';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoPacienteService {

  urlApiMedicamentoPaciente = `${environment.urlApi}/medicamentoMedicamento`;

  constructor(private http: HttpClient) { }

  getMedicamentos()
  {
    return this.http.get<MedicamentoPaciente[]>(this.urlApiMedicamentoPaciente);
  }

  getmedicamentoById(id: number)
  {
    return this.http.get<MedicamentoPaciente>(`${this.urlApiMedicamentoPaciente}/${id}`);
  }

  postMedicamento(medicamento: MedicamentoPaciente)
  {
    return this.http.post<MedicamentoPaciente>(this.urlApiMedicamentoPaciente, medicamento);
  }

  deleteMedicamento(id: number)
  {
    return this.http.delete<boolean>(`${this.urlApiMedicamentoPaciente}/${id}`);
  }
}
