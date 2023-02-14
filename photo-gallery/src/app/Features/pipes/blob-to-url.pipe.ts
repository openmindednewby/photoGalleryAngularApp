import { SafeResourceUrlPair } from '../../models/safe-resource-url-pair';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'blobToUrl'
})
export class BlobToUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: Blob | null): SafeResourceUrlPair | void {
    if (!!value) {
      const url = URL.createObjectURL(value);
      const id = url.slice(url.lastIndexOf('/') + 1)
      const img: SafeResourceUrlPair = {
        key: id,
        value: this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(value))
      }

      return img;
    }
    return;
  }

}
