import { SessionStorageService } from 'src/app/session-storage.service';

import { GalleryFavoritesListViewComponent } from '../../components/gallery-favorites-list-view/gallery-favorites-list-view.component';

describe('GalleryFavoritesListViewComponent', () => {
  let component: GalleryFavoritesListViewComponent;
  let mockSessionStorageService: jasmine.SpyObj<SessionStorageService<string>>;

  beforeEach(() => {
    mockSessionStorageService = jasmine.createSpyObj('SessionStorageService', ['getKeys'])

    component = new GalleryFavoritesListViewComponent(mockSessionStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
