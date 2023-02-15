import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-gallery-favorites-list-view',
  templateUrl: './gallery-favorites-list-view.component.html',
  styleUrls: ['./gallery-favorites-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryFavoritesListViewComponent implements OnInit {



  constructor(private sessionStorageService: SessionStorageService<string>) { }

  public imageKeys: string[] = this.sessionStorageService.getKeys();


  ngOnInit(): void {
  }

  public itemTracking(_index: number, value: any) {
    return value;
  }

}
