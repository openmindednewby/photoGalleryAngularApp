import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryViewImageComponent } from '../../components/gallery-view-image/gallery-view-image.component';
import { GalleryServiceService } from '../../gallery-service.service';

describe('GalleryViewImageComponent Class test', () => {
    let component: GalleryViewImageComponent;
    let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
    let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
    let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;


  beforeEach(() => {
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot'])
    mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getSpecificImage'])
    mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['set', 'removeItem'])

    component = new GalleryViewImageComponent(
      mockActivatedRoute,
      mockGalleryServiceService,
      mockSessionStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
