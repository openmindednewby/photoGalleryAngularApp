import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SafeResourceUrlPair } from 'src/app/models/safe-resource-url-pair';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';

@Component({
  selector: 'app-photo-widget',
  templateUrl: './photo-widget.component.html',
  styleUrls: ['./photo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoWidgetComponent {
  public isFavorite = false;

  constructor(private galleryServiceService: GalleryServiceService, private sessionStorageService: SessionStorageService<SafeResourceUrlPair>) {
  }

  public image$: Observable<Blob> | undefined = this.galleryServiceService.getRandomImage();

  public addFavorite(value: SafeResourceUrlPair | void) {
    if (!value) {
      return;
    }

    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      this.sessionStorageService.set(value.key, value.value);
    } else {
      this.sessionStorageService.removeItem(value.key);
    }
  }
}
