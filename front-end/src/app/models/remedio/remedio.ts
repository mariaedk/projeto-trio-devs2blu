export class Remedio
{
  idRemedio?: number;
  nomeRemedio?: string;
  statusRemedioUso?: string;
  deadLineRemedio?: Date;

  constructor(obj: Partial<Remedio>)
  {
    Object.assign(this, obj);
  }
}
