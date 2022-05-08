
import { RemedioService } from './../../../services/remedio/remedio.service';
import { Remedio } from './../../../models/remedio/remedio';
import { Observable, Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-remedio',
  templateUrl: './lista-remedio.component.html',
  styleUrls: ['./lista-remedio.component.scss']
})
export class ListaRemedioComponent implements OnInit {

  listaRemedios$ = new Observable<Remedio[]>();

  monitoraStatusAction$ = new Subject<boolean>();

  remedioAction = new Remedio({});

  constructor(private remedioService: RemedioService) { }

  ngOnInit(): void {
    this.getRemedios();

    this.monitoraStatusAction$.subscribe(
      (resp) => {
          this.remedioAction = new Remedio({});
          this.getRemedios();
      }
    )
  }

  getRemedios()
  {
    this.listaRemedios$ = this.remedioService.getRemedios();
  }

  confirmAction(remedio: Remedio)
  {
    if(remedio)
    {
      this.remedioAction = remedio;
    }
  }
}
