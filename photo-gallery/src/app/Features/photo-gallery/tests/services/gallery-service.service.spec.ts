import { asyncScheduler, map, scheduled, Subscription } from 'rxjs';
import { HttpClientService } from 'src/app/http-client.service';
import { SessionStorageService } from 'src/app/session-storage.service';

import { GalleryServiceService } from '../../gallery-service.service';
import { mockedBlob, mockedObservableBlob } from '../test-data';

describe('GalleryServiceService', () => {
  let service: GalleryServiceService;
  let mockHttpClientService: jasmine.SpyObj<HttpClientService>;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<Blob>>;

  let subscription: Subscription;

  beforeEach(() => {
    mockHttpClientService = jasmine.createSpyObj('HttpClientService', ['getBlob'])
    mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['get', 'set', 'removeItem'])

    service = new GalleryServiceService(mockHttpClientService, mockSessionStorageService);
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
      const expectedData = mockedObservableBlob;
      mockHttpClientService.getBlob.and.returnValue(scheduled(expectedData, asyncScheduler));

      //Act
      service.getRandomImage();

      //Assert
      expect(mockHttpClientService.getBlob).toHaveBeenCalled();
    });
  });
  describe('getFavoriteImage', () => {
    it('should return favorite image from session storage if it exists', () => {
      //Arrange
      const input = 'key1';
      const expectedData = mockedBlob;
      mockSessionStorageService.get.and.returnValue(expectedData);

      //Act
      service.getFavoriteImage(input);

      //Assert
      expect(mockSessionStorageService.get).toHaveBeenCalledWith(input);
    });
  });
  describe('setFavoriteImage', () => {
    it('should set favorite image to session storage', () => {

      //Arrange
      const inputKey = 'key1';
      const inputValue = mockedBlob;
      mockSessionStorageService.set.and.returnValue();

      //Act
      service.setFavoriteImage(inputKey, inputValue);

      //Assert
      expect(mockSessionStorageService.set).toHaveBeenCalledWith(inputKey, inputValue);
    });
  });
  describe('removeFavoriteImage', () => {
    it('should remove session item', () => {

      //Arrange
      const inputKey = 'key1';
      const inputValue = mockedBlob;
      mockSessionStorageService.set.and.returnValue();

      //Act
      service.setFavoriteImage(inputKey, inputValue);

      //Assert
      expect(mockSessionStorageService.set).toHaveBeenCalledWith(inputKey, inputValue);
    });
  });
});
