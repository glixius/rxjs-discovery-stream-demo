/*
 * @Author: Gilberto López
 * @Date: 2018-04-03 21:50:47
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 15:27:49
 */

 /* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

 // Platform imports
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Third party libraries
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import {
  map, filter, scan, mapTo, share, take,
  skip, takeLast, distinct, takeWhile, takeUntil } from 'rxjs/operators';

// App Imports
import { LetterState } from './enums/letter-state.enum';
import { Letter } from './interfaces/letter.interface';
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

    const minuteSeconds$ = interval(1000)
      .pipe(
        take(61),
        takeWhile( () => !this.word.resolved )
      );
    const minuteReached$ = minuteSeconds$
      .pipe(takeLast(1));

    // Create an Observable from keypress event.
    const uniqueLetters$ = fromEvent(this.document, 'keypress')
      .pipe(
        takeUntil(minuteReached$),
        map( (keyboardEvent: KeyboardEvent) => keyboardEvent.key.toUpperCase() ),
        filter( (letter: string) => this.wordService.isValidLetter(letter)),
        distinct()
      );

    // Create a new observable of word letters misses.
    const wordMisses$ = uniqueLetters$
      .pipe(
        filter( (letter) => !this.isLetterIncluded(letter)),
        mapTo(1),
        scan( (missesCount, letter) => ++missesCount, 0 )
      );

    // Based on uniqueLetters stream, create an observable of matching letters.
    const wordMatches$ = uniqueLetters$
      .pipe(
        filter( (letter) => this.isLetterIncluded(letter))
      );

    // Subscribe to observables.
    uniqueLetters$
      .subscribe( (key: string) => this.usedLetters.push(key));

    wordMisses$
      .subscribe(
        missesCount => this.letterMisses = missesCount
      );

    wordMatches$
      .subscribe(
        letter => {
          this.word.letters = this.word.letters
            .map(
              wordLetter => {
                if (wordLetter.value === letter) {
                  const updatedLetter = Object.assign(wordLetter);

                  updatedLetter.state = LetterState.Discovered;

                  return updatedLetter;
                }

                return wordLetter;
              });

              this.word.resolved = this.word.letters.every( wordLetter => wordLetter.state === LetterState.Discovered);
        }
      );

    minuteSeconds$
      .subscribe(
        second => this.currentSeconds = second,
        () => {},
        () => {
          this.word.letters = this.word.letters
            .map(
              wordLetter => {
                if (wordLetter.state === LetterState.Undiscovered) {
                  const updatedLetter = Object.assign(wordLetter);

                  updatedLetter.state = LetterState.Lost;

                  return updatedLetter;
                }
                return wordLetter;
              });
        }
      );
   }

   ngOnDestroy() {
    clearInterval(this.intervalId);
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

  isLetterIncluded(letter: string) {
    return this.word.letters.some( (wordLetter: Letter) => wordLetter.value === letter );
  }
}
