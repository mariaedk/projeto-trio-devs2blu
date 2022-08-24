import { RemedioService } from './../../../services/remedio/remedio.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Remedio } from './../../../models/remedio/remedio';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-remedio',
  templateUrl: './update-remedio.component.html',
  styleUrls: ['./update-remedio.component.scss']
})
export class UpdateRemedioComponent implements OnInit {

  @Input()
  remedioEdit = new Remedio({});

  @Input()
  statusEdit = new Subject<boolean>();

  myDate = new Date();

  dataFinalizacao: NgbDate = new NgbDate(0, 0, 0);

  constructor(private remedioService: RemedioService) { }

  ngOnInit(): void {
  }

  updateDate()
  {
    if (this.dataFinalizacao.year != 0)
    {
      this.dataFinalizacao.month = this.dataFinalizacao.month - 1;
      this.myDate = new Date(this.dataFinalizacao.year, this.dataFinalizacao.month, this.dataFinalizacao.day);
      this.remedioEdit.deadLineRemedio = this.myDate;
    }
  }

  update(remedio: Remedio)
  {
    this.updateDate();
    if (remedio)
    {
      this.remedioService.updateRemedio(remedio).subscribe(
        resp =>
        {
          if (resp)
          {
            console.log(resp)
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
    this.remedioEdit = new Remedio({});
    this.statusEdit.next(status);
    this.dataFinalizacao = new NgbDate(0, 0, 0);
  }

  cancelUpdate()
  {
    this.remedioEdit = new Remedio({});
    this.statusEdit.next(false);
    this.dataFinalizacao = new NgbDate(0, 0, 0);
  }
}
