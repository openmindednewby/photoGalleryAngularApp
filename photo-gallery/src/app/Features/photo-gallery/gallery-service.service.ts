import { Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { SessionStorageService } from 'src/app/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  private readonly randomImageUrl = 'https://picsum.photos/200/300';

  constructor(
    private readonly httpClientService: HttpClientService,
    private readonly sessionStorageService: SessionStorageService<Blob>,

  ) { }

  public getRandomImage(): Observable<Blob> {
    return this.httpClientService.getBlob(this.randomImageUrl);
  }

  public getFavoriteImage(key: string): Observable<Blob> | void {
    const result = this.sessionStorageService.get(key);
    if (!!result) {
      return of(result);
    }
    return;
  }

  public setFavoriteImage(key:string, value:any) {
    this.sessionStorageService.set(key,value);
  }

  public removeFavoriteImage(key:string): void {
    this.sessionStorageService.removeItem(key);
  }

}
