import { RestartGame } from './../services/restartGame.service';
import { WordAndLetter } from './../services/word-and-letter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallows',
  templateUrl: './gallows.component.html',
  styleUrls: ['./gallows.component.css']
})
export class GallowsComponent implements OnInit {
 changeImageIndex: number = 0;

 pathImgList: string[] = [
  "./assets/img/gallows1.png",
  "./assets/img/gallows2.png",
  "./assets/img/gallows3.png",
  "./assets/img/gallows4.png",
  "./assets/img/gallows5.png",
  "./assets/img/gallows6.png",
  "./assets/img/gallows7.png",
 ];
  pathImg: string = "./assets/img/gallows1.png";

  constructor(public wordAndLetter: WordAndLetter, public restartGame: RestartGame) {
    this.wordAndLetter.loseLiveFlag.subscribe(() => this.onChangeImage());
    console.log(this.pathImg);
    this.restartGame.gameOverOutput.subscribe(() => this.onRestartImage());
   }

  ngOnInit(): void {
  }

  onChangeImage() {
    this.changeImageIndex++;
    this.pathImg = this.pathImgList[this.changeImageIndex];
  }

  onRestartImage() {
    this.changeImageIndex = 0;
  }


}
