import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from 'src/create/dto/create-lead.dto';
import { Lead } from 'src/create/entity/Lead';
import { map } from 'rxjs';
import { Constant } from 'src/auth/url/url';
import { CreateContactDto } from 'src/create/dto/create-contact.dto';
import { Contact } from 'src/create/entity/Contact';
import { CreateCompanyDto } from 'src/create/dto/create-company.dto copy';
import { Company } from 'src/create/entity/Company';

@Injectable()
export class CreateService {
  constructor(
    private readonly httpService: HttpService,
    private readonly constant: Constant,
  ) {}

  createLead(createLead: CreateLeadDto, token: string) {
    const newLead = new Lead({ ...createLead });

    return this.httpService
      .post(`${this.constant.url}/api/v4/leads`, {
        data: newLead,
        headers: {
          'Authorization: Bearer': token,
        },
      })
      .pipe(map((resp) => resp.data));
  }

  createContact(createContact: CreateContactDto, token: string) {
    const newContact = new Contact({ ...createContact });

    return this.httpService
      .post(`${this.constant.url}/api/v4/contacts`, {
        data: newContact,
        headers: {
          'Authorization: Bearer': token,
        },
      })
      .pipe(map((resp) => resp.data));
  }
  createCompany(createCompany: CreateCompanyDto, token: string) {
    const newContact = new Company({ ...createCompany });

    return this.httpService
      .post(`${this.constant.url}/api/v4/contacts`, {
        data: newContact,
        headers: {
          'Authorization: Bearer': token,
        },
      })
      .pipe(map((resp) => resp.data));
  }
}
