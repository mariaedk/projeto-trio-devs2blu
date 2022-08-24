import { RemedioService } from './../../../services/remedio/remedio.service';
import { Remedio } from './../../../models/remedio/remedio';
import { PacienteService } from './../../../services/paciente/paciente.service';
import { Subject, Observable } from 'rxjs';
import { Paciente } from './../../../models/paciente/paciente';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-paciente',
  templateUrl: './update-paciente.component.html',
  styleUrls: ['./update-paciente.component.scss']
})
export class UpdatePacienteComponent implements OnInit {

  @Input()
  pacienteEdit = new Paciente({});

  @Input()
  statusEdit = new Subject<boolean>();

  listaRemedios$ = new Observable<Remedio[]>();

  constructor(private pacienteService: PacienteService, private remedioService: RemedioService) { }

  ngOnInit(): void {
    this.getRemedios();
  }

  getRemedios()
  {
    this.listaRemedios$ = this.remedioService.getRemedios();
  }

  update(paciente: Paciente)
  {
    if (paciente)
    {
      this.pacienteService.updatePaciente(paciente).subscribe(
        resp =>
        {
          if (resp)
          {
            console.log("modificado");
            this.updateStatus(true);
            this.cancelUpdate();
          }
          else
          {
            this.updateStatus(false);
            this.cancelUpdate();
          }
        }
      )
    }
  }

  updateStatus(status: boolean)
  {
    this.pacienteEdit = new Paciente({});
    this.statusEdit.next(status);
  }

  cancelUpdate()
  {
    this.statusEdit.next(false);
  }

}
