import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { mockedImage } from '../test-data';

describe('SafeUrlPipe', () => {
  let pipe: SafeUrlPipe;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl'])
    mockSanitizer.bypassSecurityTrustResourceUrl.and.returnValue(([mockedImage.blob]));

    pipe = new SafeUrlPipe(mockSanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  describe('Transform', () => {
    it('should return SafeUrl object', () => {
      //Arrange Act
      const expectedData = mockedImage;
      expectedData.blob = new Blob([`test`])
      pipe.transform('1');

      //Assert
      expect(mockSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    });
  });


});
