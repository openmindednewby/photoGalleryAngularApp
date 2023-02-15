import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';
import { Image, WidgetModeEnum } from 'src/app/Features/photo-gallery/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-widget',
  templateUrl: './photo-widget.component.html',
  styleUrls: ['./photo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoWidgetComponent implements OnInit {

  @Input() mode: WidgetModeEnum = WidgetModeEnum.Undefined;
  @Input() public imageKey: string | undefined;
  public image$: Observable<Image> | undefined;
  public isFavorite = false;
  public storedId: string | null = null;

  constructor(
    private galleryServiceService: GalleryServiceService,
    private sessionStorageService: SessionStorageService<string>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.retrieveRouteData();
    switch (this.mode) {
      case WidgetModeEnum.Default:
      case WidgetModeEnum.Undefined:
        this.image$ = defer(() => this.galleryServiceService.getRandomImage());
        break
      case WidgetModeEnum.EnlargedView:
        this.storedId = this.activatedRoute.snapshot.paramMap.get('id');
        this.image$ = defer(() => this.galleryServiceService.getSpecificImage(this.storedId as string, 500, 700));
        break
      case WidgetModeEnum.Favorite:
        if (!!this.imageKey) {
          this.storedId = this.sessionStorageService.get(this.imageKey);
        }
        if (!!this.storedId) {
          this.image$ = defer(() => this.galleryServiceService.getSpecificImage(this.storedId as string));
        }
        break
      default:
        this.image$ = defer(() => this.galleryServiceService.getRandomImage());
        break
    }
  }

  public retrieveRouteData() {
    const snapshotData = this.activatedRoute?.snapshot?.data['mode'];
    if (!!snapshotData) {
      this.mode = parseInt(snapshotData, 10);
      this.isFavorite = true;
    }
  }

  public openImage(id: string | void) {
    if (!!id) {
      this.router.navigate(['/photos', id], { state: { mode: WidgetModeEnum.EnlargedView } });
    }
  }


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

  public clickAction(value: string | void) {
    switch (this?.mode) {
      case WidgetModeEnum.Default:
      case WidgetModeEnum.Undefined:
      case WidgetModeEnum.EnlargedView:
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

}
