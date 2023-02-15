import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-gallery-favorites-list-view',
  templateUrl: './gallery-favorites-list-view.component.html',
  styleUrls: ['./gallery-favorites-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryFavoritesListViewComponent {

  public imageKeys: string[] = this.sessionStorageService.getKeys();

  constructor(private sessionStorageService: SessionStorageService<string>) { }

  public itemTracking(_index: number, value: any) {
    return value;
  }

}
