import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryViewImageComponent } from '../../components/gallery-view-image/gallery-view-image.component';

describe('GalleryViewImageComponent Dom test', () => {
  let component: GalleryViewImageComponent;
  let fixture: ComponentFixture<GalleryViewImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryViewImageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
