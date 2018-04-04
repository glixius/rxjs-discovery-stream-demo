/*
 * @Author: Gilberto López
 * @Date: 2018-04-03 21:50:47
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 12:48:54
 */

 /* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

 // Platform imports
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Third party libraries

// App Imports
import { LetterState } from './enums/letter-state.enum';
import { Word } from './interfaces/word.interface';
import { WordService } from './services/word.service';


/* ––
 * –––– Component definition
 * –––––––––––––––––––––––––––––––––– */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  /** –––
   *  –– Variables
   */
  public word: Word;
  public letterMisses: number;
  public usedLetters: string[];
  public currentSeconds: number;
  private intervalId: any;

  /** –––
   *  –– Constructor
   */
  constructor(@Inject(DOCUMENT) private document: any, private wordService: WordService) {}

  /** –––
   *  –– Lifecycle hooks
   */

   ngOnInit() {
    this.word = this.wordService.getRandomWord();
    this.letterMisses = 0;
    this.usedLetters = [];
    this.currentSeconds = 0;

    this.document.addEventListener('keypress', (event: KeyboardEvent) => this.usedLetters.push(event.key));
    this.intervalId = setInterval(() => this.currentSeconds++, 1000)
   }

   ngOnDestroy() {
    clearInterval(this.intervalId);
    this.document.removeEventListener('keypress', (event: KeyboardEvent) => this.usedLetters.push(event.key));
   }

  /** –––
   *  –– Public methods
   */
  showLetter(letterState: LetterState) {
    return letterState !== LetterState.Undiscovered;
  }

  isDiscoveredLetter(letterState: LetterState) {
    return letterState === LetterState.Discovered;
  }

  isLostLetter(letterState: LetterState) {
    return letterState === LetterState.Lost;
  }

  showBodyPart(partIndex: number) {
    return this.letterMisses < partIndex;
  }
}
