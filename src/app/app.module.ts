import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GallowsComponent } from './gallows/gallows.component';
import { WordComponent } from './word/word.component';
import { LettersComponent } from './letters/letters.component';
import { RestartComponent } from './restart/restart.component';
import { SingleLetterComponent } from './letters/single-letter/single-letter.component';
import { WordAndLetter } from './services/word-and-letter.service';
import { RestartGame } from './services/restartGame.service';

@NgModule({
  declarations: [
    AppComponent,
    GallowsComponent,
    WordComponent,
    LettersComponent,
    RestartComponent,
    SingleLetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WordAndLetter, RestartGame],
  bootstrap: [AppComponent]
})
export class AppModule { }
