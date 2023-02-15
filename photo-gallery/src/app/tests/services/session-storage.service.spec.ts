import { Subscription } from 'rxjs';

import { SessionStorageService } from '../../session-storage.service';
import { mockSafeUrl } from '../test-data';

describe('SessionStorageService', () => {
  let service: SessionStorageService<string>;
  let subscription: Subscription;

  beforeEach(() => {
    service = new SessionStorageService();
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

  describe('set', () => {
    it('should set a value', () => {
      //Arrange
      const expectedData = mockSafeUrl.id;

      //Act
      service.set(mockSafeUrl.id, mockSafeUrl.id);
      const actualData = sessionStorage.getItem(mockSafeUrl.id) as string;

      //Assert
      expect(actualData).toBe(expectedData);
    });

    describe('get', () => {
      it('should have retrieved null', () => {
        //Arrange
        const expectedData = null;

        //Act
        const actualData = service.get(mockSafeUrl.id);

        //Assert
        expect(actualData).toBe(expectedData);
      });

      it('should have retrieved set value', () => {
        //Arrange
        const expectedData = mockSafeUrl.id;

        //Act
        service.set(mockSafeUrl.id, mockSafeUrl.id);
        const actualData = service.get(mockSafeUrl.id);

        //Assert
        expect(actualData).toEqual(expectedData);
      });
    });

    describe('removeItem', () => {
      it('should have removed key value', () => {
        //Arrange
        const expectedData = null;

        //Act
        service.set(mockSafeUrl.id, mockSafeUrl.id);
        service.removeItem(mockSafeUrl.id);
        const actualData = sessionStorage.getItem(mockSafeUrl.id);

        //Assert
        expect(actualData).toBe(expectedData);
      });
    });

    describe('clear', () => {
      it('should have removed all keys', () => {
        //Arrange
        const expectedData: [] = [];

        //Act
        service.set(mockSafeUrl.id, mockSafeUrl.id);
        service.clear();
        const actualData = Object.keys(sessionStorage);

        //Assert
        expect(actualData).toEqual(expectedData);
      });
    });

    describe('getKeys', () => {
      it('should retrieve all keys', () => {
        //Arrange
        const expectedDataLength = 1;

        //Act
        service.set(mockSafeUrl.id, mockSafeUrl.id);
        const actualData = Object.keys(sessionStorage).length;

        //Assert
        expect(actualData).toEqual(expectedDataLength);
      });
    });


  });
});
