import { HttpResponse } from '@angular/common/http';
import { of } from "rxjs";
import { Image } from '../models';

export const mockedBlob = new Blob([`data`]);
export const mockedHttpResponseBlob = new HttpResponse<Blob>();
export const mockedObservableHttpResponseBlob = of(mockedHttpResponseBlob);
export const mockedObservableBlob = of(mockedBlob);

export const mockedImage: Image = {
  id: '1',
  blob: mockedBlob
}

export const activatedRouteStub = {
  snapshot: {
    paramMap: {
      get: (key: string) => '123'
    },
    data: {
      mode: '1'
    }
  }
};

export const activatedRouteMock = {
    paramMap: of({
      id: '1',
      get: (key: string) => ({id: '1'})
    })
};
