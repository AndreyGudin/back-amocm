import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from 'src/create/dto/create-lead.dto';
import { Lead } from 'src/create/entity/Lead';
import { map } from 'rxjs';

@Injectable()
export class CreateService {
  constructor(private readonly httpService: HttpService) {}

  createLead(
    { name, created_by, price }: CreateLeadDto,
    url: string,
    token: string,
  ) {
    const newLead = new Lead({
      name,
      created_by,
      price,
    });

    return this.httpService
      .post(`${url}/api/v4/leads`, {
        data: newLead,
        headers: {
          'Authorization: Bearer': token,
        },
      })
      .pipe(map((resp) => resp.data));
  }
}
