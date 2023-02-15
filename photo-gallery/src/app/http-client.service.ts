import { delay, Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private readonly httpClient: HttpClient) { }

  public getBlobFull(url: string): Observable<HttpResponse<Blob>>{
    return this.httpClient.get(url,{
      observe: 'response',
      responseType: 'blob'
    }).pipe(delay(this.randomRange()))
  }

  public getBlob(url: string): Observable<Blob>{
    return this.httpClient.get(url,{
      responseType: 'blob'
    }).pipe(delay(this.randomRange()))
  }

  private randomRange(): number | Date {
    return Math.floor(Math.random() * (500 - 200 + 1)) + 200;
  }
}
