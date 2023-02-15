import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { FavoritePhotoWidgetComponent } from '../../components/favorite-photo-widget/favorite-photo-widget.component';
import { GalleryServiceService } from '../../gallery-service.service';

describe('FavoritePhotoWidgetComponent', () => {
  let component: FavoritePhotoWidgetComponent;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  let mockRouter: jasmine.SpyObj<Router>;


  beforeEach(() => {
    mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['get']);
    mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getSpecificImage']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    component = new FavoritePhotoWidgetComponent(mockSessionStorageService, mockGalleryServiceService, mockRouter);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
