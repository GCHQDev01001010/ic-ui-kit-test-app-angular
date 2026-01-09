import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ICDSModule } from '@ukic/angular';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PageA } from './page-a';
import { PageB } from './page-b';

@NgModule({
  declarations: [
    App,
    PageA,
    PageB
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ICDSModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
