import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from 'src/create/dto/create-lead.dto';
import { Lead } from 'src/create/entity/Lead';
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

  async createLead(createLead: CreateLeadDto, token: string) {
    const newLead = [new Lead({ ...createLead })];
    try {
      const result = await this.httpService.axiosRef.post(
        `https://${this.constant.url}/api/v4/leads`,
        newLead,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async createContact(createContact: CreateContactDto, token: string) {
    const newContact = [new Contact({ ...createContact })];
    try {
      const result = await this.httpService.axiosRef.post(
        `https://${this.constant.url}/api/v4/contacts`,
        newContact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async createCompany(createCompany: CreateCompanyDto, token: string) {
    const newCompany = [new Company({ ...createCompany })];
    try {
      const result = await this.httpService.axiosRef.post(
        `https://${this.constant.url}/api/v4/companies`,
        newCompany,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
