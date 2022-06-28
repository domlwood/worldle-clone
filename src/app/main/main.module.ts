import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './containers/main-container.component';
import { ImageHintComponent } from './components/image-hint/image-hint.component';
import { PreviousGuessBoxComponent } from './components/previous-guess-box/previous-guess-box.component';
import { GuessBoxComponent } from './components/guess-box/guess-box.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

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
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
})
export class MainModule {}
