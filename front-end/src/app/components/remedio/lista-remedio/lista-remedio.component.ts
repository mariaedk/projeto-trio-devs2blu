
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

  constructor(private remedioService: RemedioService) { }

  ngOnInit(): void {
    this.getRemedios();
  }

  getRemedios()
  {
    this.listaRemedios$ = this.remedioService.getRemedios();
  }


}
