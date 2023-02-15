import { asyncScheduler,  scheduled, Subscription } from 'rxjs';
import { HttpClientService } from 'src/app/http-client.service';

import { GalleryServiceService } from '../../gallery-service.service';
import { mockedObservableBlob, mockedObservableHttpResponseBlob } from '../test-data';

describe('GalleryServiceService', () => {
  let service: GalleryServiceService;
  let mockHttpClientService: jasmine.SpyObj<HttpClientService>;

  let subscription: Subscription;

  beforeEach(() => {
    mockHttpClientService = jasmine.createSpyObj('HttpClientService', ['getBlob', 'getBlobFull'])

    service = new GalleryServiceService(mockHttpClientService);
    sessionStorage.clear();
  });

  afterEach(() => {
    if (!!subscription) {
      subscription.unsubscribe();
    }
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRandomImage', () => {
    it('should return a random image', () => {
      //Arrange
      const expectedData = mockedObservableHttpResponseBlob;
      mockHttpClientService.getBlobFull.and.returnValue(scheduled(expectedData, asyncScheduler));

      //Act
      service.getRandomImage();

      //Assert
      expect(mockHttpClientService.getBlobFull).toHaveBeenCalled();
    });
  });
  describe('getSpecificImage', () => {
    it('should return a specific image', () => {
      //Arrange
      const expectedData = mockedObservableBlob;
      mockHttpClientService.getBlob.and.returnValue(scheduled(expectedData, asyncScheduler));

      //Act
      service.getSpecificImage('1');

      //Assert
      expect(mockHttpClientService.getBlob).toHaveBeenCalled();
    });
  });

});
