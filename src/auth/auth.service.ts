import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}
  auth(): Observable<
    AxiosResponse<{ access_token: string; base_domain: string }>
  > {
    return this.httpService
      .get('https://test.gnzs.ru/oauth/get-token.php', {
        headers: {
          'X-Client-Id': JSON.stringify(process.env.X_CLIENT_ID),
        },
      })
      .pipe(map((resp) => resp.data));
  }
}
