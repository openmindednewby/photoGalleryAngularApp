import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotoWidgetComponent } from '../../components/favorite-photo-widget/favorite-photo-widget.component';

describe('FavoritePhotoWidgetComponent', () => {
  let component: FavoritePhotoWidgetComponent;
  let fixture: ComponentFixture<FavoritePhotoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePhotoWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePhotoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
