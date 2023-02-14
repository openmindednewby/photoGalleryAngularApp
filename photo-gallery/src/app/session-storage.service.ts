import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService<T> {

  constructor() { }

  public set(key: string, value: any): void {
    if (!!value) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  public get(key: string): T | null {
    const resultString = sessionStorage.getItem(key);
    if (!!resultString) {
      return JSON.parse(resultString);
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
