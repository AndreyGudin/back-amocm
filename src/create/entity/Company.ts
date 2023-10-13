export class Company {
  name: string;
  created_by: number;

  constructor(partial: Partial<Company>) {
    Object.assign(this, partial);
  }
}
