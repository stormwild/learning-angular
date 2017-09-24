import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts.component';
import { CarPartsService } from './car-parts.service';

@NgModule({
  declarations: [
    AppComponent, CarPartsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CarPartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
