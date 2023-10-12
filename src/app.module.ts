import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CreateModule } from './create/create.module';

@Global()
@Module({
  imports: [HttpModule, ConfigModule.forRoot(), AuthModule, CreateModule],
  exports: [HttpModule],
})
export class AppModule {}
