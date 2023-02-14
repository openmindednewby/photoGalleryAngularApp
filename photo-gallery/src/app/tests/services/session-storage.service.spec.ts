import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { SessionStorageService } from '../../session-storage.service';
import { mockImageUrl } from '../test-data';

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
      const expectedData = mockImageUrl.value;

      //Act
      service.set(mockImageUrl.key, mockImageUrl.value);
      const actualData = JSON.parse(sessionStorage.getItem(mockImageUrl.key) as string);

      //Assert
      expect(actualData).toBe(expectedData);
    });

    describe('get', () => {
      it('should have retrieved null', () => {
        //Arrange
        const expectedData = null;

        //Act
        const actualData = service.get(mockImageUrl.key);

        //Assert
        expect(actualData).toBe(expectedData);
      });

      it('should have retrieved set value', () => {
        //Arrange
        const expectedData = mockImageUrl.value;

        //Act
        service.set(mockImageUrl.key, mockImageUrl.value);
        const actualData = service.get(mockImageUrl.key);

        //Assert
        expect(actualData).toBe(expectedData);
      });
    });

    describe('removeItem', () => {
      it('should have removed key value', () => {
        //Arrange
        const expectedData = null;

        //Act
        service.set(mockImageUrl.key, mockImageUrl.value);
        service.removeItem(mockImageUrl.key);
        const actualData = sessionStorage.getItem(mockImageUrl.key);

        //Assert
        expect(actualData).toBe(expectedData);
      });
    });

    describe('clear', () => {
      it('should have removed all keys', () => {
        //Arrange
        const expectedData: [] = [];

        //Act
        service.set(mockImageUrl.key, mockImageUrl.value);
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
        service.set(mockImageUrl.key, mockImageUrl.value);
        const actualData = Object.keys(sessionStorage).length;

        //Assert
        expect(actualData).toEqual(expectedDataLength);
      });
    });


  });
});
