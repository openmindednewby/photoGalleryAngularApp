import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoWidgetComponent } from './components/photo-widget/photo-widget.component';
import { GalleryHeaderComponent } from './components/gallery-header/gallery-header.component';
import { GalleryListViewComponent } from './components/gallery-list-view/gallery-list-view.component';
import { GalleryFavoritesListViewComponent } from './components/gallery-favorites-list-view/gallery-favorites-list-view.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BlobToUrlPipe } from './pipes/blob-to-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    PhotoGalleryComponent,
    PhotoWidgetComponent,
    GalleryHeaderComponent,
    GalleryListViewComponent,
    GalleryFavoritesListViewComponent,
    BlobToUrlPipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [BlobToUrlPipe]
})
export class PhotoGalleryModule { }
