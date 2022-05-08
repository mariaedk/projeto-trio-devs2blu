import { Remedio } from './../../../models/remedio/remedio';
import { RemedioService } from './../../../services/remedio/remedio.service';
import { PacienteService } from './../../../services/paciente/paciente.service';
import { Paciente } from './../../../models/paciente/paciente';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit {

  formPaciente: Paciente = new Paciente({});
  listaRemedios$ = new Observable<Remedio[]>();
  listaRemediosSelecionados$ = new Observable<Remedio[]>();
  okInsert: boolean = false;

  constructor(private pacienteService: PacienteService,
              private remedioService: RemedioService) { }

  ngOnInit(): void {
    this.getRemedios();
  }

  getRemedios()
  {
    this.listaRemedios$ = this.remedioService.getRemedios();
  }

  addPaciente()
  {
    this.pacienteService.postPaciente(this.formPaciente).subscribe(
      (paciente) => {
        if (!(typeof paciente.idPaciente == 'undefined') && paciente.idPaciente > 0)
        {
          this.okInsert = true;
          setTimeout(()=>
          {
            this.okInsert = false;
            this.formPaciente = new Paciente({});
          },3000);
        }
      }
    )
  }
  resetForm()
  {
    this.formPaciente = new Paciente({});
  }
}
