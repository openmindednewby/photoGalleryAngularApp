import { GalleryFavoritesListViewComponent } from './components/gallery-favorites-list-view/gallery-favorites-list-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListViewComponent } from './components/gallery-list-view/gallery-list-view.component';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoWidgetComponent } from './components/photo-widget/photo-widget.component';
import { WidgetModeEnum } from './models';

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent,
    children: [
      {
        path: '',
        component: GalleryListViewComponent
      },
      {
        path: 'favorites',
        component: GalleryFavoritesListViewComponent
      },
      {
        path: 'photos/:id',
        component: PhotoWidgetComponent,
        data: { mode: WidgetModeEnum.EnlargedView }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule { }
