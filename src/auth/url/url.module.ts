import { Global, Module } from '@nestjs/common';
import { Constant } from './url';

@Global()
@Module({
  providers: [Constant],
  exports: [Constant],
})
export class ConstantModule {}
