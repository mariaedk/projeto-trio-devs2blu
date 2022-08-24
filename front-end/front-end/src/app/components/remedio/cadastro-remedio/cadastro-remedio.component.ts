import { Subject } from 'rxjs';
import { RemedioService } from './../../../services/remedio/remedio.service';
import { Remedio } from './../../../models/remedio/remedio';
import { Component, OnInit, Input } from '@angular/core';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-remedio',
  templateUrl: './cadastro-remedio.component.html',
  styleUrls: ['./cadastro-remedio.component.scss']
})

export class CadastroRemedioComponent implements OnInit {

  constructor(private remedioService: RemedioService, private modalService: NgbModal) { }

  formRemedio: Remedio = new Remedio({});
  myDate = new Date();
  okInsert: boolean = false;
  dataFinalizacao: NgbDate = new NgbDate(0, 0, 0);

  ngOnInit(): void
  {

  }

  updateDate()
  {
    this.dataFinalizacao.month = this.dataFinalizacao.month - 1;
    this.myDate = new Date(this.dataFinalizacao.year, this.dataFinalizacao.month, this.dataFinalizacao.day);
    this.formRemedio.deadLineRemedio = this.myDate;
  }

  save()
  {
    this.updateDate();
    this.remedioService.postRemedio(this.formRemedio).subscribe(
      (resp) => {
        if (!(typeof resp.idRemedio == 'undefined') && resp.idRemedio > 0)
        {
          this.okInsert = true;
          setTimeout(()=>
          {
            this.okInsert = false;
            this.formRemedio = new Remedio({});
            this.dataFinalizacao = new NgbDate(0, 0, 0);
          },3000);
        }
      }
    )
  }

  resetForm()
  {
    this.formRemedio = new Remedio({});
    this.dataFinalizacao = new NgbDate(0, 0, 0);
  }

}
