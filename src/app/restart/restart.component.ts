import { RestartGame } from './../services/restartGame.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.css']
})
export class RestartComponent implements OnInit {
  @Input() victoryFlag: boolean;
  @Input() endGameFlag: boolean;
 
  constructor(public restartGame: RestartGame) { }

  ngOnInit(): void {
  }

  onRestartGame() {
    this.restartGame.onRestartGame();
  }

}
