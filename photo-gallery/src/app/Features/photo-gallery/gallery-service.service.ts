import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { Image } from './models';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  private readonly imageUrl = 'https://picsum.photos/';
  private readonly randomWidgetImageUrl = this.imageUrl + '200/300';

  constructor(
    private readonly httpClientService: HttpClientService
  ) { }

  public getRandomImage(): Observable<Image> {
    const response = this.httpClientService.getBlobFull(this.randomWidgetImageUrl);
    let responseId: string = '';
    let responseBlob: Blob | null;

    return response.pipe(map((value) => {
      responseId = value.headers.get('Picsum-ID') as string;
      responseBlob = value.body;
      const result: Image = {
        id: responseId,
        blob: responseBlob
      }
      return result;
    }))

  }

  public getSpecificImage(id: string, width = 200, height = 300): Observable<Image> {
    let response = this.httpClientService.getBlob(this.imageUrl + 'id/' + id + '/' + width + '/' + height);
   return response.pipe(map((value) => {
      const result: Image = {
        id: id,
        blob: value
      }
      return result;
    }))
  }

}
