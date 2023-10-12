import { Module } from '@nestjs/common';
import { CreateService } from './create.service';
import { CreateController } from './create.controller';
import { Constant } from 'src/auth/url/url';

@Module({
  providers: [CreateService],
  controllers: [CreateController],
  imports: [Constant],
})
export class CreateModule {}
