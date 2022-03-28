import { EventEmitter } from '@angular/core';
export class WordAndLetter {
    loseLiveFlag= new EventEmitter<boolean>();
    lettersArray: string[] = ['A','B','C','D','E','F','G','H','I','L','M','N','O','P','Q','R','S','T','U','V','Z'];
    wordList: string[] = [
        'Vulcano',
        'Amico',
        'Organo',
        'Rame',
        'Gorilla',
        'Orzo',
        'Noci',
        'Melanzana',
        'Cristallo',
        'Pavimento',
        'Risotto',
        'Sei',
        'Stalattiti',
        'Sinistra',
        'Siluro',
        'Oggetto',
        'Incrocio',
        'Pannocchia',
        'Scarpa',
        'Giorno',
        'Computer',
        'Scaffale',
        'Tanga',
        'Pasta',
        'Contenitore',
        'Medicina',
        'Sensuale',
        'Viso',
        'Elettricità',
        'Canile',
        'Lavandino',
        'Furbo',
        'Moneta',
        'Lampada',
        'Camomilla',
        'Proboscide',
        'Russo',
        'Blu',
        'Valigia',
        'Gorilla',
        'Macchia',
        'Grotta',
        'Mutande',
        'Pasta',
        'Cornice']

        chooseRandomWord() {
            return this.wordList[Math.floor(Math.random() * this.wordList.length)].toUpperCase();
        }

        loseLive() {
            this.loseLiveFlag.emit();
        }
        
}

