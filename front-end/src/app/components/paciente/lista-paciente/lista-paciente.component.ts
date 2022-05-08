import { PacienteService } from './../../../services/paciente/paciente.service';
import { HttpClient } from '@angular/common/http';
import { Remedio } from './../../../models/remedio/remedio';
import { Paciente } from './../../../models/paciente/paciente';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})
export class ListaPacienteComponent implements OnInit {

  listaPacientes$ = new Observable<Paciente[]>();

  monitoraStatusAction$ = new Subject<boolean>();

  pacienteAction = new Paciente({});

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void
  {
    this.getAllPacientes();

    this.monitoraStatusAction$.subscribe(
      (resp) => {
          this.pacienteAction = new Paciente({});
          this.getAllPacientes();
      }
    )
  }

  getAllPacientes()
  {
    this.listaPacientes$ = this.pacienteService.getPacientes();
  }

  confirmAction(paciente: Paciente)
  {
    if(paciente)
    {
      this.pacienteAction = paciente;
    }
  }

}
