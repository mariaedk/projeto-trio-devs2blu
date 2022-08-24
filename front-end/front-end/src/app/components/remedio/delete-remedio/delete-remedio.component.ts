import { RemedioService } from './../../../services/remedio/remedio.service';
import { Remedio } from './../../../models/remedio/remedio';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete-remedio',
  templateUrl: './delete-remedio.component.html',
  styleUrls: ['./delete-remedio.component.scss']
})
export class DeleteRemedioComponent implements OnInit {

  @Input() // vem do componente pai (anotacoes-list)
  remedioDelete = new Remedio({});

  @Input() // vai ser a resposta se deu certo o delete ou nao
  statusDelete = new Subject<boolean>();

  constructor(private remedioService: RemedioService) { }

  ngOnInit(): void {
  }

  delete(id?: number)
  {
    if (!id)
    {
      return;
    }
    this.remedioService.deleteRemedio(id || 0).subscribe(
      resp => {
        if (resp)
        {
          console.log('Registro excluído');
          this.remedioDelete = new Remedio({});
          this.statusDelete.next(true);
        }
        else
        {
          this.remedioDelete = new Remedio({});
          this.statusDelete.next(false);
        }
      }
    );
  }

  cancelDelete()
  {
    this.remedioDelete = new Remedio({});
  }

}
