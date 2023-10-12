import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, firstValueFrom } from 'rxjs';
import { Constant } from 'src/auth/url/url';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly constant: Constant,
  ) {}
  async auth(): Promise<string> {
    const result: Observable<
      AxiosResponse<{ access_token: string; base_domain: string }>
    > = this.httpService.get('https://test.gnzs.ru/oauth/get-token.php', {
      headers: {
        'X-Client-Id': JSON.stringify(process.env.X_CLIENT_ID),
      },
    });
    this.constant.url = (await firstValueFrom(result)).data.base_domain;
    return (await firstValueFrom(result)).data.access_token;
  }
}
