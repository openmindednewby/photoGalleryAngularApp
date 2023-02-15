import { DomSanitizer } from '@angular/platform-browser';
import { BlobToUrlPipe } from '../../pipes/blob-to-url.pipe';
import { mockedImage } from '../test-data';

describe('BlobToUrlPipe', () => {
  let pipe: BlobToUrlPipe;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl'])
    mockSanitizer.bypassSecurityTrustResourceUrl.and.returnValue(([mockedImage.blob]));

    pipe = new BlobToUrlPipe(mockSanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Transform', () => {
    it('should return void', () => {
      //Arrange
      const expectedData = mockedImage;
      expectedData.blob = null;

      //Act
      pipe.transform(expectedData);

      //Assert
      expect(mockSanitizer.bypassSecurityTrustResourceUrl).not.toHaveBeenCalled();
    });

    it('should return SafeUrl object', () => {
      //Arrange Act
      const expectedData = mockedImage;
      expectedData.blob = new Blob([`test`])
      pipe.transform(expectedData);

      //Assert
      expect(mockSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    });
  });

});
