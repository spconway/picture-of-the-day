import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { DataService } from './service/data.service';
import { State } from './state/state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImageModule,
    CardModule,
  ],
  providers: [DataService, State],
  bootstrap: [AppComponent],
})
export class AppModule {}
