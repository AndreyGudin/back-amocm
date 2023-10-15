export class Contact {
  name: string;
  first_name: string;
  last_name: string;

  constructor(partial: Partial<Contact>) {
    Object.assign(this, partial);
  }
}
