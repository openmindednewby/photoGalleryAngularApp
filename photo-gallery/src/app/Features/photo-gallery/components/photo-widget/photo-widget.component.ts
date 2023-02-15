import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';
import { Image, WidgetModeEnum } from 'src/app/Features/photo-gallery/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-widget',
  templateUrl: './photo-widget.component.html',
  styleUrls: ['./photo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoWidgetComponent implements OnChanges {

  @Input() mode: WidgetModeEnum = WidgetModeEnum.Undefined;
  @Input() public imageKey: string | undefined;
  public isFavorite = false;
  public storedId: string | null = null;

  constructor(
    private galleryServiceService: GalleryServiceService,
    private sessionStorageService: SessionStorageService<string>,
    private router: Router
  ) {
  }


  public ngOnChanges(): void {
    if (this.mode === WidgetModeEnum.Favorite) {
      if (!!this.imageKey) {
        this.storedId = this.sessionStorageService.get(this.imageKey);
      }
      if (!!this.storedId) {
        this.image$ = defer(() => this.galleryServiceService.getSpecificImage(this.storedId as string));
      }
    }
  }

  public openImage(id: string | void) {
    if (!!id) {
      this.router.navigate(['/photos', id]);
    }
  }

  public image$: Observable<Image> | undefined = this.imageRequestFactory();

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


public clickAction(value: string | void){
  switch (this.mode) {
    case WidgetModeEnum.Default:
    case WidgetModeEnum.Undefined:
      this.addFavorite(value);
      break
    case WidgetModeEnum.Favorite:
      this.openImage(value);
      break
    default:
      this.addFavorite(value);
      break
  }
}

  private imageRequestFactory() {
    switch (this.mode) {
      case WidgetModeEnum.Default:
      case WidgetModeEnum.Undefined:
        return this.galleryServiceService.getRandomImage();
      case WidgetModeEnum.Favorite:
        return;
      default:
        return this.galleryServiceService.getRandomImage();
    }

  }
}
