import { RestartGame } from './services/restartGame.service';
import { WordComponent } from './word/word.component';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(WordComponent) wordComponent: WordComponent;

  title = 'Hangedman';
  letterToPass: string;
  victoryFlag: boolean;
  endGameFlag: boolean = false;

  constructor(public restartGame: RestartGame) {
    this.restartGame.gameOverOutput.subscribe(() => this.onRestartGame());
  }

  onLetterToPass(letter: string){
   this.wordComponent.onSearchLetter(letter);
  }

  onDisplayHangman() {

  }

  onSetGameOverFlag(victoryFlagInput: boolean) {
    this.victoryFlag = victoryFlagInput;
    this.endGameFlag = true;
  }

  onRestartGame() {
    this.victoryFlag = false;
    this.endGameFlag = false;
  }
}
