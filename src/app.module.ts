import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CreateModule } from './create/create.module';
import { ConstantModule } from 'src/auth/url/url.module';

@Global()
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    AuthModule,
    CreateModule,
    ConstantModule,
  ],
  exports: [HttpModule],
})
export class AppModule {}
