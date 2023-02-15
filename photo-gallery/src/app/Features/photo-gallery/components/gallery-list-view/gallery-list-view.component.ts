import { delay } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-list-view',
  templateUrl: './gallery-list-view.component.html',
  styleUrls: ['./gallery-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListViewComponent implements OnInit {
  public loadedItems: string[] = [];
  private imageLoadingThreshold = 70;
  public imageLoadBatch = 3;
  private minimumNumberOfImages = 10;

  constructor(private ref: ChangeDetectorRef) { }

  @HostListener('window:scroll', ['passive: true'])
  onScroll() {
    this.loadImages();
  }

  private loadImages() {
    let currentScrollVerticalPosition = this.verticalScrollPosition();
    if ((currentScrollVerticalPosition < this.imageLoadingThreshold) || this.loadedItems.length < this.minimumNumberOfImages) {
      while ((currentScrollVerticalPosition === this.verticalScrollPosition()) || this.loadedItems.length < this.minimumNumberOfImages) {
        this.addItems(this.imageLoadBatch);
        this.ref.detectChanges();
        delay(1000);
      }
    }
  }

  public verticalScrollPosition() {
    const scrollHeight = document.documentElement.scrollHeight; //height of entire document - moved in documentation
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; //current scroll position
    const windowHeight = window.innerHeight; // visible inner window height
    const currentScrollVerticalPosition = scrollHeight - (scrollTop + windowHeight);
    return currentScrollVerticalPosition;
  }

  public addItems(number = 3) {
    for (let i = 0; i < number; i++) {
      this.addItem()
    }
  }

  public addItem() {
    this.loadedItems.push('');
  }

  public ngOnInit(): void {
    this.loadImages();
  }

  public itemTracking(_index: number, value: any) {
    return value;
  }

}
