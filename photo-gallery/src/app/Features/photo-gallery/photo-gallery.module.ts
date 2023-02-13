import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoWidgetComponent } from './components/photo-widget/photo-widget.component';


@NgModule({
  declarations: [
    PhotoGalleryComponent,
    PhotoWidgetComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule
  ]
})
export class PhotoGalleryModule { }
