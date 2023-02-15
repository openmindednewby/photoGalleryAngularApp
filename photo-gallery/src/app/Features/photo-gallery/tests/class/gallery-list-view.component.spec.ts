import { ChangeDetectorRef } from '@angular/core';
import { GalleryListViewComponent } from '../../components/gallery-list-view/gallery-list-view.component';

describe('GalleryListViewComponent', () => {
  let component: GalleryListViewComponent;
  let ref: jasmine.SpyObj<ChangeDetectorRef>;

  ref = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges'])
  ref.detectChanges.and.returnValue();

  beforeEach(() => {
    component = new GalleryListViewComponent(ref);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Methods', () => {

    it('addItem should append by 1 loadedItems list', () => {
      //Arrange
      component.loadedItems = [];
      const expectedResult = 1;

      //Act
      component.addItem()
      //Assert
      expect(component.loadedItems.length).toEqual(expectedResult);
    });

    it('addItems should append by X loadedItems list', () => {
      //Arrange
      component.loadedItems = [];
      const expectedResult = 5;

      //Act
      component.addItems(5)
      //Assert
      expect(component.loadedItems.length).toEqual(expectedResult);
    });

    it('itemTracking should return input value parameter', () => {
      //Arrange
      component.loadedItems = [];
      const input = 5;
      const expectedResult = input;
      let actualResult = 0;

      //Act
      actualResult = component.itemTracking(0, input)
      //Assert
      expect(actualResult).toEqual(expectedResult);
    });

    it('verticalScrollPosition should return a number', () => {
      //Arrange
      const expectedResult: number = 0;
      let actualResult: any;

      //Act
      actualResult = component.verticalScrollPosition()
      //Assert
      expect(typeof actualResult).toEqual(typeof expectedResult);
    });
  });

});
