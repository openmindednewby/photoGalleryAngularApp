import { SafeUrl } from '../models/safe-resource-url-pair';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'src/app/Features/photo-gallery/models';

@Pipe({
  name: 'blobToUrl'
})
export class BlobToUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: Image | null): SafeUrl | void {
    if (!!value?.blob) {
      const urlString = URL.createObjectURL(value.blob);
      const img: SafeUrl = {
        id: value.id,
        value: this.sanitizer.bypassSecurityTrustResourceUrl(urlString),
      }

      return img;
    }
    return;
  }

}
