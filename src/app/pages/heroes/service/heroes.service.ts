import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RequestEndpoints } from 'src/app/config/api.constants';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  apiKey = '70bbf0240debd64e1a0441bddac6305a';

  constructor(private http: HttpClient) {}

  getMoviments(): Observable<any> {
    return this.http.get(
      RequestEndpoints.CHARACTERS + `?apikey=${this.apiKey}`
    );
  }
}
