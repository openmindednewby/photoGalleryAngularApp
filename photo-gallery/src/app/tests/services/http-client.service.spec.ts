import { HttpClient } from '@angular/common/http';
import { asyncScheduler, Observable, Observer, of, scheduled, Subscription } from 'rxjs';

import { HttpClientService } from '../../http-client.service';

describe('HttpClientService', () => {
  let httpClientService: HttpClientService;
  let mockClientService: jasmine.SpyObj<HttpClient>;
  let subscription: Subscription;


  beforeEach(() => {
    mockClientService = jasmine.createSpyObj('HttpClient', ['get'])
    httpClientService = new HttpClientService(mockClientService);
  });

  afterEach(() => {
    if (!!subscription) {
      subscription.unsubscribe();
    }
  })

  it('should be created', () => {
    expect(httpClientService).toBeTruthy();
  });

  describe('methods', () => {
    describe('getBlob', () => {

      it('should have method', () => {
        expect(httpClientService.getBlob).toBeDefined();
      });

      it('should have called get method', () => {
        //Arrange
        const expectedData: Observable<Blob> = of(new Blob([]))
        mockClientService.get.and.returnValue(scheduled([expectedData], asyncScheduler));

        //Act
        httpClientService.getBlob('test');

        //Assert
        expect(mockClientService.get).toHaveBeenCalled();
      });

    })
  })
});
