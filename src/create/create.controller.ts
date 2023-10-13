import { Body, Controller, NotFoundException, Post, Req } from '@nestjs/common';
import { CreateService } from 'src/create/create.service';
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
}
