import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListViewComponent } from '../../components/gallery-list-view/gallery-list-view.component';

describe('GalleryListViewComponent', () => {
  let component: GalleryListViewComponent;
  let fixture: ComponentFixture<GalleryListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
