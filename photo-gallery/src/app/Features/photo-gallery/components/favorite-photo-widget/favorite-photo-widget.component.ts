import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { defer, Observable, of } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';

@Component({
  selector: 'app-favorite-photo-widget',
  templateUrl: './favorite-photo-widget.component.html',
  styleUrls: ['./favorite-photo-widget.component.scss']
  //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritePhotoWidgetComponent implements OnChanges {

  @Input() public imageKey: string | undefined;
  constructor(private sessionStorageService: SessionStorageService<string>, private ref: ChangeDetectorRef, private galleryServiceService: GalleryServiceService,) { }
  public image$: Observable<any> | undefined;
  public storedId: string | null = null;

  public ngOnChanges(_changes: SimpleChanges): void {

    if (!!this.imageKey) {
      this.storedId = this.sessionStorageService.get(this.imageKey);
    }
    if (!!this.storedId) {
      this.image$ = defer(() => this.galleryServiceService.getSpecificImage(this.storedId as string));
    }
    //this.ref.detectChanges();
  }


  // private getImagePair() {
  //   const urlPair = this.sessionStorageService.get(this.imageKey as string);
  //   if (!!urlPair) {
  //     this.imageUrl = this.galleryServiceService.getSpecificImage(urlPair);
  //     return of(urlPair);
  //   }
  //   return;
  // }



}
