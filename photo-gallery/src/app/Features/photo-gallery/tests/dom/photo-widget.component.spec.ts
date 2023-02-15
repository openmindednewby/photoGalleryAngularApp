import { GalleryHeaderComponent } from './../../components/gallery-header/gallery-header.component';
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { asyncScheduler, scheduled } from 'rxjs';
import { BlobToUrlPipe } from 'src/app/Features/photo-gallery/pipes/blob-to-url.pipe';
import { SessionStorageService } from 'src/app/session-storage.service';

import { PhotoWidgetComponent } from '../../components/photo-widget/photo-widget.component';
import { GalleryServiceService } from '../../gallery-service.service';
import { activatedRouteStub, mockedImage } from '../test-data';

describe('PhotoWidgetComponent DOM test', () => {
  let component: PhotoWidgetComponent;
  let fixture: ComponentFixture<PhotoWidgetComponent>;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;
  let mockRouter: jasmine.SpyObj<Router>;

  mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getRandomImage'])
  mockGalleryServiceService.getRandomImage.and.returnValue(scheduled([mockedImage], asyncScheduler))
  mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['get', 'set', 'removeItem']);
  mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GalleryHeaderComponent,
        PhotoWidgetComponent,
        BlobToUrlPipe],
      providers: [
        { provide: GalleryServiceService, useValue: mockGalleryServiceService },
        { provide: SessionStorageService, useValue: mockSessionStorageService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      imports: [
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        RouterModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoWidgetComponent);
    component = fixture.componentInstance;
    component.mode = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
