import { RemedioService } from './../../../services/remedio/remedio.service';
import { Remedio } from './../../../models/remedio/remedio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-remedio',
  templateUrl: './cadastro-remedio.component.html',
  styleUrls: ['./cadastro-remedio.component.scss']
})

export class CadastroRemedioComponent implements OnInit {

  constructor(private remedioService: RemedioService) { }

  formRemedio: Remedio = new Remedio({});

  okInsert: boolean = false;

  ngOnInit(): void {

  }

  addRemedio()
  {

    this.remedioService.postRemedio(this.formRemedio).subscribe(
      (resp) => {
        console.log('remédio cadastrado com sucesso')
      }
    )
  }

  resetForm()
  {
    this.formRemedio = new Remedio({});
  }

}
