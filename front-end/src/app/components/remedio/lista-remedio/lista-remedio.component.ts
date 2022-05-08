import { MedicamentoPacienteService } from './../../../services/medicamento-paciente/medicamento-paciente.service';
import { MedicamentoPaciente } from './../../../models/medicamento-paciente/medicamento-paciente';
import { RemedioService } from './../../../services/remedio/remedio.service';
import { Remedio } from './../../../models/remedio/remedio';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-remedio',
  templateUrl: './lista-remedio.component.html',
  styleUrls: ['./lista-remedio.component.scss']
})
export class ListaRemedioComponent implements OnInit {

  listaRemedios$ = new Observable<Remedio[]>();
  listaMedicamentosPaciente$ = new Observable<MedicamentoPaciente[]>();

  constructor(private remedioService: RemedioService, private medicamentoService: MedicamentoPacienteService) { }

  ngOnInit(): void {
    this.getRemedios();
    this.getMedicamentos();
  }

  getRemedios()
  {
    this.listaRemedios$ = this.remedioService.getRemedios();
  }

  getMedicamentos()
  {
    this.listaMedicamentosPaciente$ = this.medicamentoService.getMedicamentos();
  }
}
