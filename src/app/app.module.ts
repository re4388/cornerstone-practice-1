import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Dwv0Component } from './dwv0/dwv0.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DicomViewerComponent } from './dicom-viewer/dicom-viewer.component';
import { CornerstoneDirective } from './cornerstone.directive';
import { ThumbnailDirective } from './thumbnail.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    Dwv0Component,
    DicomViewerComponent,
    CornerstoneDirective,
    ThumbnailDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
