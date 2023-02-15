import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { defer, Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';

@Component({
  selector: 'app-favorite-photo-widget',
  templateUrl: './favorite-photo-widget.component.html',
  styleUrls: ['./favorite-photo-widget.component.scss']
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritePhotoWidgetComponent implements OnChanges {

  @Input() public imageKey: string | undefined;
  constructor(
    private sessionStorageService: SessionStorageService<string>,
    private galleryServiceService: GalleryServiceService,
    private router: Router
    ) { }
  public image$: Observable<any> | undefined;
  public storedId: string | null = null;

  public ngOnChanges(): void {

    if (!!this.imageKey) {
      this.storedId = this.sessionStorageService.get(this.imageKey);
    }
    if (!!this.storedId) {
      this.image$ = defer(() => this.galleryServiceService.getSpecificImage(this.storedId as string));
    }
  }

  public openImage(id: string | undefined) {
    if (!!id) {
      this.router.navigate(['/photos', id]);
    }
  }
}
