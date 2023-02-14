import { Subscription } from 'rxjs';
import { SafeResourceUrlPair } from 'src/app/models';

import { SessionStorageService } from '../../session-storage.service';
import { mockSafeResourceUrlPair } from '../test-data';

describe('SessionStorageService', () => {
  let service: SessionStorageService<SafeResourceUrlPair>;
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
      const expectedData = mockSafeResourceUrlPair.value;

      //Act
      service.set(mockSafeResourceUrlPair.key, mockSafeResourceUrlPair.value);
      const actualData = JSON.parse(sessionStorage.getItem(mockSafeResourceUrlPair.key) as string);

      //Assert
      expect(actualData).toBe(expectedData);
    });

    describe('get', () => {
      it('should have retrieved null', () => {
        //Arrange
        const expectedData = null;

        //Act
        const actualData = service.get(mockSafeResourceUrlPair.key);

        //Assert
        expect(actualData).toBe(expectedData);
      });

      it('should have retrieved set value', () => {
        //Arrange
        const expectedData = mockSafeResourceUrlPair;

        //Act
        service.set(mockSafeResourceUrlPair.key, mockSafeResourceUrlPair);
        const actualData = service.get(mockSafeResourceUrlPair.key);

        //Assert
        expect(actualData).toEqual(expectedData);
      });
    });

    describe('removeItem', () => {
      it('should have removed key value', () => {
        //Arrange
        const expectedData = null;

        //Act
        service.set(mockSafeResourceUrlPair.key, mockSafeResourceUrlPair.value);
        service.removeItem(mockSafeResourceUrlPair.key);
        const actualData = sessionStorage.getItem(mockSafeResourceUrlPair.key);

        //Assert
        expect(actualData).toBe(expectedData);
      });
    });

    describe('clear', () => {
      it('should have removed all keys', () => {
        //Arrange
        const expectedData: [] = [];

        //Act
        service.set(mockSafeResourceUrlPair.key, mockSafeResourceUrlPair.value);
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
        service.set(mockSafeResourceUrlPair.key, mockSafeResourceUrlPair.value);
        const actualData = Object.keys(sessionStorage).length;

        //Assert
        expect(actualData).toEqual(expectedDataLength);
      });
    });


  });
});
