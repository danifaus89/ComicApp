import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestEndpoints } from 'src/app/config/api.constants';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  public ts: string = 'thesoer';
  public publicKey = environment.APIKEY;
  public privateKey = environment.PRIVATEKEY;
  private hashMd5 = Md5.hashStr(this.ts + this.privateKey + this.publicKey);

  constructor(private http: HttpClient) {}

  getHeroes(limit: number): Observable<any> {
    return this.http.get(
      RequestEndpoints.CHARACTERS +
        `?limit=${limit}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hashMd5}`
    );
  }

  getHeroe(id: number) {
    return this.http.get(
      RequestEndpoints.CHARACTER +
        `/${id}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hashMd5}`
    );
  }
}
