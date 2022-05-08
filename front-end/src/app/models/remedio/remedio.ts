export class Remedio
{
  id?: number;
  nome?: string;

  constructor(obj: Partial<Remedio>)
  {
    Object.assign(this, obj);
  }
}
