import { WordAndLetter } from './../services/word-and-letter.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {
  @Output() letterOutput = new EventEmitter<string>();

  lettersArray: string[] = [];


  constructor(public wordAndLetter: WordAndLetter) { }

  ngOnInit(): void {
    this.lettersArray = this.wordAndLetter.lettersArray;
  }

  onPassLetterSelected(letter: string) {
    this.letterOutput.emit(letter);
  }

}
