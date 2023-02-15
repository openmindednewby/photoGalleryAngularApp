import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GalleryHeaderComponent } from '../../components/gallery-header/gallery-header.component';

describe('GalleryHeaderComponent', () => {
  let component: GalleryHeaderComponent;
  let fixture: ComponentFixture<GalleryHeaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatButtonToggleModule],
      declarations: [GalleryHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Layout', () => {
    it('should have a section', () => {
      //Arrange
      const expectedValue = ''
      let actualValue: any = null;

      //Act
      fixture.detectChanges();
      actualValue = debugElement.query(By.css('#header-section')).nativeElement

      //Assert
      expect(actualValue).toBeDefined();
    });

    it('should have a button group', () => {
      //Arrange
      const expectedValue = ''
      let actualValue: any = null;

      //Act
      fixture.detectChanges();
      actualValue = debugElement.query(By.css('#header-button-group')).nativeElement

      //Assert
      expect(actualValue).toBeDefined();
    });

    it('should have a photo button', () => {
      //Arrange
      const expectedValue = 'Photo'
      let actualValue: string;

      //Act
      fixture.detectChanges();
      actualValue = debugElement.query(By.css('#header-photos-button')).nativeElement.textContent

      //Assert
      expect(actualValue).toContain(expectedValue);
    });

    it('should have a Favorites button', () => {
      //Arrange
      const expectedValue = 'Favorites'
      let actualValue: string;

      //Act
      fixture.detectChanges();
      actualValue = debugElement.query(By.css('#header-favorites-button')).nativeElement.textContent

      //Assert
      expect(actualValue).toContain(expectedValue);
    });
  });
  describe('actions', () => {
    //..
  });
});
