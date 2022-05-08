import { PacienteService } from './../../../services/paciente/paciente.service';
import { HttpClient } from '@angular/common/http';
import { Remedio } from './../../../models/remedio/remedio';
import { Paciente } from './../../../models/paciente/paciente';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})
export class ListaPacienteComponent implements OnInit {

  listaPacientes$ = new Observable<Paciente[]>();
  listaRemedios$ = new Observable<Remedio[]>();

  constructor(private http: HttpClient, private pacienteService: PacienteService) { }

  ngOnInit(): void
  {
    this.getAllPacientes();
  }

  getAllPacientes()
  {
    this.listaPacientes$ = this.pacienteService.getPacientes();
  }

}
