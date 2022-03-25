import { RestartGame } from './../../services/restartGame.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-single-letter',
  templateUrl: './single-letter.component.html',
  styleUrls: ['./single-letter.component.css']
})
export class SingleLetterComponent implements OnInit {
@Input() letterValue: string = '';
@Output() letterOutput = new EventEmitter<string>();
selected: boolean = false;

  constructor(public restartGame: RestartGame) {
    this.restartGame.gameOverOutput.subscribe(() => this.onResetLetter());
   }

  ngOnInit(): void {
  }

  onLetterSelected() {
    if(!this.selected){
      this.letterOutput.emit(this.letterValue);
      this.selected = true;
    }
  }

  onResetLetter() {
    this.selected = false;
  }

}
