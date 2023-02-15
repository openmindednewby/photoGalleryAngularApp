import { SessionStorageService } from 'src/app/session-storage.service';
import { PhotoWidgetComponent } from '../../components/photo-widget/photo-widget.component';
import { GalleryServiceService } from '../../gallery-service.service';

describe('PhotoWidgetComponent Class test', () => {
  let component: PhotoWidgetComponent;
  let mockGalleryServiceService: jasmine.SpyObj<GalleryServiceService>;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;

  beforeEach(() => {
    mockGalleryServiceService = jasmine.createSpyObj('GalleryServiceService', ['getRandomImage'])
    component = new PhotoWidgetComponent(mockGalleryServiceService, mockSessionStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
