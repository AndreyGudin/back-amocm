import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Global()
@Module({
  imports: [HttpModule, ConfigModule.forRoot(), AuthModule],
  exports: [HttpModule],
})
export class AppModule {}
