import { EventEmitter } from "@angular/core";

export class RestartGame {
   gameOverOutput = new EventEmitter<boolean>();

   onRestartGame() {
       this.gameOverOutput.emit(true);
   }
}