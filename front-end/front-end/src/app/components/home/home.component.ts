import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/models/paciente/paciente';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaPacientes$ = new Observable<Paciente[]>();

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    const status = (event.target as HTMLSelectElement)?.value;
      if(status){
        this.listaPacientes$ = this.pacienteService.getAllByStatus(status);
        this.pacienteService
          .getAllByStatus(status).subscribe(
            (response) => {
              console.log(response);
            }
          );
      }
  }

}
