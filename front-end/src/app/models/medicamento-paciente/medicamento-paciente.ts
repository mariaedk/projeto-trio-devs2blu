import { Remedio } from './../remedio/remedio';
import { Paciente } from './../paciente/paciente';
export class MedicamentoPaciente
{
  id?: number;
  frequencia?: string;
  frequenciaUso?: number;
  statusMedicamentoUso?: string;
  remedio: Remedio = new Remedio({});
  paciente: Paciente = new Paciente({});

  constructor(obj: Partial<MedicamentoPaciente>)
  {
    Object.assign(this, obj);
  }
}
