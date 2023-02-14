import { GalleryFavoritesListViewComponent } from './components/gallery-favorites-list-view/gallery-favorites-list-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryViewImageComponent } from './components/gallery-view-image/gallery-view-image.component';
import { GalleryListViewComponent } from './components/gallery-list-view/gallery-list-view.component';
import { PhotoGalleryComponent } from './photo-gallery.component';

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
        component: GalleryViewImageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule { }
