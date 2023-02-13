import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Features/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
  },
  {
    path: '**',
    loadChildren: () => import('./Features/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
