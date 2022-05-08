import { PacienteService } from './../../../services/paciente/paciente.service';
import { Paciente } from './../../../models/paciente/paciente';
import { Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-paciente',
  templateUrl: './delete-paciente.component.html',
  styleUrls: ['./delete-paciente.component.scss']
})
export class DeletePacienteComponent implements OnInit {

  @Input() // vem do componente pai (anotacoes-list)
  pacienteDelete = new Paciente({});

  @Input() // vai ser a resposta se deu certo o delete ou nao
  statusDelete = new Subject<boolean>();

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }

  delete(id?: number)
  {
    if (!id)
    {
      return;
    }
    this.pacienteService.deletePaciente(id || 0).subscribe(
      resp => {
        if (resp)
        {
          console.log('Registro excluído');
          this.pacienteDelete = new Paciente({});
          this.statusDelete.next(true);
        }
        else
        {
          this.pacienteDelete = new Paciente({});
          this.statusDelete.next(false);
        }
      }
    );
  }

  cancelDelete()
  {
    this.pacienteDelete = new Paciente({});
  }

}
