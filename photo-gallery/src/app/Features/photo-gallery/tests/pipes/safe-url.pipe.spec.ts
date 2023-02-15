import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

describe('SafeUrlPipe', () => {
  let sanitizer: DomSanitizer;

  it('create an instance', () => {
    const pipe = new SafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
