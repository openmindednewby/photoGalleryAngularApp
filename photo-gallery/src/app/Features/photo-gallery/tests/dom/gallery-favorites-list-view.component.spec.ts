import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFavoritesListViewComponent } from '../../components/gallery-favorites-list-view/gallery-favorites-list-view.component';

describe('GalleryFavoritesListViewComponent', () => {
  let component: GalleryFavoritesListViewComponent;
  let fixture: ComponentFixture<GalleryFavoritesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryFavoritesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFavoritesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
