/*
 * @Author: Gilberto López
 * @Date: 2018-04-03 21:50:47
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-14 10:22:43
 */

 /* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

 // Platform imports
import { Component, OnInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Third party libraries
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import {
  map, filter, scan, mapTo, share, take, startWith,
  skip, takeLast, distinct, takeWhile, takeUntil } from 'rxjs/operators';

// App Imports
import { LetterState } from './enums/letter-state.enum';
import { Letter } from './interfaces/letter.interface';
import { Word } from './interfaces/word.interface';
import { WordService } from './services/word.service';
import { Subscription } from 'rxjs/Subscription';


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

  private subscriptions: Subscription[];
  private gameSubscriptions: Subscription[];
  private minuteSeconds$: Observable<number>;
  private minuteReached$: Observable<number>;
  private uniqueLetters$: Observable<string>;
  private wordMisses$: Observable<number>;
  private wordMatches$: Observable<string>;

  @ViewChild('restart') restartButton: ElementRef;

  /** –––
   *  –– Constructor
   */
  constructor(@Inject(DOCUMENT) private document: any, private wordService: WordService) {
    this.subscriptions = [];
    this.gameSubscriptions = [];
  }

  /** –––
   *  –– Lifecycle hooks
   */

  ngOnInit() {

    // Observable for handling seconds sequence.
    this.minuteSeconds$ = interval(1000)
      .pipe(
        take(61),
        takeWhile( () => !this.word.finished )
      );

    // Observable returning value when interval reached first minute.
    this.minuteReached$ = this.minuteSeconds$
      .pipe(takeLast(1));

    // Observable listening to keypress inputs and sending unique valid letters only.
    this.uniqueLetters$ = fromEvent(this.document, 'keypress')
      .pipe(
        takeUntil(this.minuteReached$),
        map( (keyboardEvent: KeyboardEvent) => keyboardEvent.key.toUpperCase() ),
        filter( (letter: string) => this.wordService.isValidLetter(letter)),
        distinct()
      );

    // Observable counting player letter misses.
    this.wordMisses$ = this.uniqueLetters$
      .pipe(
        filter( (letter) => !this.isLetterIncluded(letter)),
        mapTo(1),
        scan( (missesCount, letter) => ++missesCount, 0 ),
        take(9)
      );

    // Observable returning current word's letter matches only.
    this.wordMatches$ = this.uniqueLetters$
      .pipe(
        filter( (letter) => this.isLetterIncluded(letter))
      );

    const startGameSubscriptionŒ = fromEvent(this.restartButton.nativeElement, 'click')
      .pipe(
        startWith('Initial click')
      )
      .subscribe( () => this.resetGame() );

    this.subscriptions.push(startGameSubscriptionŒ);
  }

  ngOnDestroy() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
    this.gameSubscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  /** –––
   *  –– Private methods
   */
  updateLostLetters() {

    this.word.letters = this.word.letters
      .map(
        wordLetter => {
          if (wordLetter.state === LetterState.Undiscovered) {
            const updatedLetter = Object.assign(wordLetter);

            updatedLetter.state = LetterState.Lost;

            return updatedLetter;
          }
          return wordLetter;
        }
      );
  }

  updateDiscoveredLetter(letter) {
    this.word.letters = this.word.letters
      .map(
        wordLetter => {
          if (wordLetter.value === letter) {
            const updatedLetter = Object.assign(wordLetter);

            updatedLetter.state = LetterState.Discovered;

            return updatedLetter;
          }
          return wordLetter;
        }
      );

    this.word.finished = this.word.letters.every( wordLetter => wordLetter.state === LetterState.Discovered);
  }

  resetGame() {

    // Release current subscriptions.
    if ( this.gameSubscriptions.length ) {
      this.gameSubscriptions.forEach( subscription => subscription.unsubscribe() );
    }

    // Reset game state.
    this.word = this.wordService.getRandomWord();
    this.letterMisses = 0;
    this.usedLetters = [];
    this.currentSeconds = 0;

    // Subscribe to minute seconds for updating clock and stopping the game at second 60.
    const minuteSecondsŒ = this.minuteSeconds$
      .subscribe(
        second => this.currentSeconds = second,
        () => {},
        this.updateLostLetters.bind(this)
      );

    // Subscribe to unique letter for dislaying used letters.
    const uniqueLetterŒ = this.uniqueLetters$
      .subscribe( (key: string) => this.usedLetters.push(key));

    // Subscribe to wordMisses for updating hangman draw and stop when game is over.
    const wordMissesŒ = this.wordMisses$
      .subscribe(
        missesCount => this.letterMisses = missesCount,
        () => {},
        () => this.word.finished = true
      );

    // Subscribe to wordMatches for displaying letter matches.
    const wordMatchesŒ = this.wordMatches$
      .subscribe(this.updateDiscoveredLetter.bind(this));

    this.gameSubscriptions.push(uniqueLetterŒ, wordMissesŒ, wordMatchesŒ, minuteSecondsŒ);
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

  isInvalidLetter(value: string) {
    return !this.wordService.isValidLetter(value);
  }

  showBodyPart(partIndex: number) {
    return this.letterMisses < partIndex;
  }

  isLetterIncluded(letter: string) {
    return this.word.letters.some( (wordLetter: Letter) => wordLetter.value === letter );
  }
}
