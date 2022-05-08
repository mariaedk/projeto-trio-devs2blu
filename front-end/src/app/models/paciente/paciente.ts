import { Remedio } from './../remedio/remedio';
export class Paciente
{
  idPaciente?: number;
  nomePaciente?: string;
  generoPaciente?: string;
  telefonePaciente?: number;
  remedioDto: Remedio = new Remedio({});

  constructor(obj: Partial<Paciente>)
  {
    Object.assign(this, obj);
  }
}
