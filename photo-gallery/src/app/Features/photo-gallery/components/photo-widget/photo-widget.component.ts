import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';
import { Image } from 'src/app/Features/photo-gallery/models';

@Component({
  selector: 'app-photo-widget',
  templateUrl: './photo-widget.component.html',
  styleUrls: ['./photo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoWidgetComponent {
  public isFavorite = false;

  constructor(private galleryServiceService: GalleryServiceService, private sessionStorageService: SessionStorageService<string>) {
  }

  public image$: Observable<Image> | undefined = this.galleryServiceService.getRandomImage();

  public addFavorite(value: string | void) {
    if (!value) {
      return;
    }

    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      this.sessionStorageService.set(value, value);
    } else {
      this.sessionStorageService.removeItem(value);
    }
  }
}
