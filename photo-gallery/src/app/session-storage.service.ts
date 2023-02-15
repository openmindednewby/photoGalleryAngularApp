import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService<T> {

  constructor() { }

  public set(key: string, value: string): void {
    if (!!value) {
      sessionStorage.setItem(key, value);
    }
  }

  public get(key: string): string | null {
    const resultString = sessionStorage.getItem(key);
    if (!!resultString) {
      return resultString;
      //return JSON.parse(resultString);
    }
    return null;
  }

  public removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  public clear() {
    sessionStorage.clear();
  }

  public getKeys(){
    return Object.keys(sessionStorage)
  }

}
