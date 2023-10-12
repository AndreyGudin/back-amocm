export class Lead {
  name: string;
  created_by: number;
  price: number;

  constructor(partial: Partial<Lead>) {
    Object.assign(this, partial);
  }
}
