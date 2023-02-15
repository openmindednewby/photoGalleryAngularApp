import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { asyncScheduler, scheduled } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { GalleryViewImageComponent } from '../../components/gallery-view-image/gallery-view-image.component';
import { GalleryServiceService } from '../../gallery-service.service';
import { activatedRouteStub, mockedImage } from '../test-data';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlobToUrlPipe } from '../../pipes/blob-to-url.pipe';
describe('GalleryViewImageComponent Dom test', () => {
  let component: GalleryViewImageComponent;
  let fixture: ComponentFixture<GalleryViewImageComponent>;
  // let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;

  mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getSpecificImage'])
  mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['set', 'removeItem'])


  mockGalleryServiceService.getSpecificImage.and.returnValue(scheduled([mockedImage], asyncScheduler))
  mockSessionStorageService.set.and.returnValue()
  mockSessionStorageService.removeItem.and.returnValue()

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [GalleryViewImageComponent, BlobToUrlPipe],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: GalleryServiceService, useValue: mockGalleryServiceService },
        { provide: SessionStorageService, useValue: mockSessionStorageService }
      ]
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
