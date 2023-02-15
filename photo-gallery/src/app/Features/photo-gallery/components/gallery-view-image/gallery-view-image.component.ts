import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { defer, Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/session-storage.service';
import { GalleryServiceService } from '../../gallery-service.service';

@Component({
  selector: 'app-gallery-view-image',
  templateUrl: './gallery-view-image.component.html',
  styleUrls: ['./gallery-view-image.component.scss']
})
export class GalleryViewImageComponent implements OnInit {
  public storedId: string | null = null;
  public image$: Observable<any> | undefined;
  public isFavorite = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryServiceService: GalleryServiceService,
    private sessionStorageService: SessionStorageService<string>) { }

  public ngOnInit(): void {
    this.storedId = this.activatedRoute.snapshot.paramMap.get('id');
    this.image$ = defer(() => this.galleryServiceService.getSpecificImage(this.storedId as string, 500, 700));

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

}
