import { ChangeDetectorRef } from '@angular/core';
import { GalleryListViewComponent } from '../../components/gallery-list-view/gallery-list-view.component';

describe('GalleryListViewComponent', () => {
  let component: GalleryListViewComponent;
  let ref: ChangeDetectorRef;
  beforeEach(() => {
    component = new GalleryListViewComponent(ref);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
