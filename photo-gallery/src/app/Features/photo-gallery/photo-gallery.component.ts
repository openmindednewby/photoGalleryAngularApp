import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoGalleryComponent  {

  constructor() { }


}
