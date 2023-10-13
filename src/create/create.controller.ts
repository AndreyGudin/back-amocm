import { Body, Controller, NotFoundException, Post, Req } from '@nestjs/common';
import { CreateService } from 'src/create/create.service';
import { CreateCompanyDto } from 'src/create/dto/create-company.dto copy';
import { CreateContactDto } from 'src/create/dto/create-contact.dto';
import { CreateLeadDto } from 'src/create/dto/create-lead.dto';

@Controller('create')
export class CreateController {
  constructor(private readonly createService: CreateService) {}
  @Post('/lead')
  createLead(@Req() request: Request, @Body() createLeadDto: CreateLeadDto) {
    const token = request.headers.get('Authorization: Bearer');
    if (token) return this.createService.createLead(createLeadDto, token);
    throw new NotFoundException();
  }

  createContact(
    @Req() request: Request,
    @Body() createContactDto: CreateContactDto,
  ) {
    const token = request.headers.get('Authorization: Bearer');
    if (token) return this.createService.createContact(createContactDto, token);
    throw new NotFoundException();
  }

  createCompany(
    @Req() request: Request,
    @Body() createCompanyDto: CreateCompanyDto,
  ) {
    const token = request.headers.get('Authorization: Bearer');
    if (token) return this.createService.createCompany(createCompanyDto, token);
    throw new NotFoundException();
  }
}
