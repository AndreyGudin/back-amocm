export class Company {
  name: string;

  constructor(partial: Partial<Company>) {
    Object.assign(this, partial);
  }
}
