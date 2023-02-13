import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWidgetComponent } from '../../components/photo-widget/photo-widget.component';

describe('PhotoWidgetComponent DOM test', () => {
  let component: PhotoWidgetComponent;
  let fixture: ComponentFixture<PhotoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
