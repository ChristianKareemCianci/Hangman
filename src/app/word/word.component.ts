import { RestartGame } from './../services/restartGame.service';
import { WordAndLetter } from './../services/word-and-letter.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Output() resultChoiceOutput = new EventEmitter<boolean>();
  @Output() victoryOutput = new EventEmitter<boolean>(true);

  chosenWord: string[] = [];
  chosenWordDisplay: string[] = [];
  indexVictory: number = 2;
  comparisonIndex: number = 2;
  indexLives: number = 6;


  constructor(public wordAndLetter: WordAndLetter, public restartGame: RestartGame) {
    this.restartGame.gameOverOutput.subscribe(() => this.onCleanTable());
   }

  ngOnInit(): void {
    this.onChooseWord();
  }

  onChooseWord() {
    //Choose a word and set array
    this.chosenWord = this.wordAndLetter.chooseRandomWord().split("");
    for(let indexLetter = 0; indexLetter < this.chosenWord.length; indexLetter++) {
      if(indexLetter === 0 || indexLetter === this.chosenWord.length-1){
        this.chosenWordDisplay[indexLetter] = this.chosenWord[indexLetter];
      }
      else {
        this.chosenWordDisplay[indexLetter] = '_'
      }
    }
    console.log(this.chosenWord)
  }

  onSearchLetter(letter: string) {
    for(let indexLetter = 0; indexLetter < this.chosenWord.length; indexLetter++) {
      if(letter === this.chosenWord[indexLetter]){
        if(this.chosenWordDisplay[indexLetter] !== this.chosenWord[indexLetter]){
          this.chosenWordDisplay[indexLetter] = this.chosenWord[indexLetter];
          this.indexVictory++;
        }
      }
    }
    //Reduce lives
    if(this.comparisonIndex === this.indexVictory) {
      this.indexLives--;
      this.wordAndLetter.loseLive();
    }
    //Condition to Victory
    if(this.indexVictory === this.chosenWord.length ) {
      this.victoryOutput.emit(true);
    }
    //Condition to Defeat
    else if(this.indexLives === 0) {
      this.victoryOutput.emit(false);
    }
    this.comparisonIndex = this.indexVictory;
  }

  onCleanTable() {
    for(let indexLetter = 0; indexLetter < 10; indexLetter++){
      this.chosenWordDisplay[indexLetter] = '';
    }
  }

}