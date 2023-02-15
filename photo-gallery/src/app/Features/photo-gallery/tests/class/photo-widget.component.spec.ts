import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { PhotoWidgetComponent } from '../../components/photo-widget/photo-widget.component';
import { GalleryServiceService } from '../../gallery-service.service';
import { activatedRouteMock } from '../test-data';

describe('PhotoWidgetComponent Class test', () => {
  let component: PhotoWidgetComponent;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;
  let mockRouter: jasmine.SpyObj<Router>;

  mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getRandomImage', 'getSpecificImage']);
  mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['get', 'set', 'removeItem']);
  mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {

    component = new PhotoWidgetComponent(
      mockGalleryServiceService,
      mockSessionStorageService,
      mockRouter,
      activatedRouteMock as unknown as ActivatedRoute
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
