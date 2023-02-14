import { DomSanitizer } from '@angular/platform-browser';
import { BlobToUrlPipe } from '../../../pipes/blob-to-url.pipe';

describe('BlobToUrlPipe', () => {
  let sanitizer: DomSanitizer;
  it('create an instance', () => {
    const pipe = new BlobToUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
