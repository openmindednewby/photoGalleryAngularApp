import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { asyncScheduler, scheduled } from 'rxjs';
import { BlobToUrlPipe } from 'src/app/Features/pipes/blob-to-url.pipe';

import { PhotoWidgetComponent } from '../../components/photo-widget/photo-widget.component';
import { GalleryServiceService } from '../../gallery-service.service';
import { mockedBlob } from '../test-data';

describe('PhotoWidgetComponent DOM test', () => {
  let component: PhotoWidgetComponent;
  let fixture: ComponentFixture<PhotoWidgetComponent>;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getRandomImage'])
  mockGalleryServiceService.getRandomImage.and.returnValue(scheduled([mockedBlob], asyncScheduler))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PhotoWidgetComponent,
        BlobToUrlPipe],
      providers: [
        { provide: GalleryServiceService, useValue: mockGalleryServiceService }
      ],
      imports:[
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
      ]
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
