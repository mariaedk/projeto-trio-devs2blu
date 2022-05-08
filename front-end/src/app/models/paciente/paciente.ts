import { Remedio } from './../remedio/remedio';
export class Paciente
{
  id?: number;
  nome?: string;
  genero?: string;
  telefone?: string;
  remedio: Remedio = new Remedio({});

  constructor(obj: Partial<Paciente>)
  {
    Object.assign(this, obj);
  }
}
