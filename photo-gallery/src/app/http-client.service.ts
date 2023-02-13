import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private readonly httpClient: HttpClient) { }

  public getBlob(url: string): Observable<Blob>{

    return this.httpClient.get(url,{
      responseType: 'blob'
    }).pipe(delay(this.randomRange()))
  }

  private randomRange(): number | Date {
    return Math.floor(Math.random() * (500 - 200 + 1)) + 200;
  }
}
