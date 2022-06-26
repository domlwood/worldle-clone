import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { ImageHintComponent } from './components/image-hint/image-hint.component';
import { PreviousGuessBoxComponent } from './components/previous-guess-box/guess-box.component';
import { GuessBoxComponent } from './components/guess-box/guess-box.component';

@NgModule({
  declarations: [
    MainContainerComponent,
    ImageHintComponent,
    PreviousGuessBoxComponent,
    GuessBoxComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ]
})
export class MainModule { }
