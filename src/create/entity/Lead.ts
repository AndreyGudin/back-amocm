export class Lead {
  name: string;
  price: number;

  constructor(partial: Partial<Lead>) {
    Object.assign(this, partial);
  }
}
