import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { asyncScheduler, scheduled } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';

import { FavoritePhotoWidgetComponent } from '../../components/favorite-photo-widget/favorite-photo-widget.component';
import { GalleryServiceService } from '../../gallery-service.service';
import { BlobToUrlPipe } from '../../pipes/blob-to-url.pipe';
import { mockedImage } from '../test-data';

describe('FavoritePhotoWidgetComponent', () => {
  let component: FavoritePhotoWidgetComponent;
  let fixture: ComponentFixture<FavoritePhotoWidgetComponent>;
  let mockRoute: jasmine.SpyObj<Router>;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;
  mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getSpecificImage'])
  mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['get'])
  mockRoute = jasmine.createSpyObj('router', ['navigate'])


  mockGalleryServiceService.getSpecificImage.and.returnValue(scheduled([mockedImage], asyncScheduler))
  mockSessionStorageService.get.and.returnValue('1');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePhotoWidgetComponent, BlobToUrlPipe ],
      providers: [
        { provide: SessionStorageService, useValue: mockSessionStorageService },
        { provide: GalleryServiceService, useValue: mockGalleryServiceService },
        { provide: Router, useValue: mockRoute }
      ]
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
