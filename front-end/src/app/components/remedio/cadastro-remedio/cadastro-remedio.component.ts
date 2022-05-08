import { MedicamentoPacienteService } from './../../../services/medicamento-paciente/medicamento-paciente.service';
import { RemedioService } from './../../../services/remedio/remedio.service';
import { MedicamentoPaciente } from './../../../models/medicamento-paciente/medicamento-paciente';
import { Remedio } from './../../../models/remedio/remedio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-remedio',
  templateUrl: './cadastro-remedio.component.html',
  styleUrls: ['./cadastro-remedio.component.scss']
})

export class CadastroRemedioComponent implements OnInit {

  constructor(private medicPacienteService: MedicamentoPacienteService, private remedioService: RemedioService) { }

  formRemedio: Remedio = new Remedio({});
  formMedicamentoPaciente: MedicamentoPaciente = new MedicamentoPaciente({});

  okInsert: boolean = false;

  ngOnInit(): void {

  }

  addRemedio()
  {
    this.medicPacienteService.postMedicamento(this.formMedicamentoPaciente).subscribe(
      (resp) => {
        if (!(typeof resp.id == 'undefined') && resp.id > 0)
        {
          this.okInsert = true;
          setTimeout(()=>
          {
            this.okInsert = false;
            this.formMedicamentoPaciente = new MedicamentoPaciente({});
          },3000);
        }
      }
    )

    this.remedioService.postRemedio(this.formRemedio).subscribe(
      (resp) => {
        console.log('remédio cadastrado com sucesso')
      }
    )
  }

  resetForm()
  {
    this.formRemedio = new Remedio({});
    this.formMedicamentoPaciente = new MedicamentoPaciente({});
  }

}
