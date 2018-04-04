/*
 * @Author: Gilberto López
 * @Date: 2018-04-04 05:02:23
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 05:42:29
 */

/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

//  Platform imports
import { Injectable } from '@angular/core';

// App imports
import { Word } from '../interfaces/word.interface';
import { wordDictionary } from '../app.constants';

/* ––
 * –––– Service definition
 * –––––––––––––––––––––––––––––––––– */

@Injectable()
export class WordService {

  /** –––
   *  –– Variables
   */
  public dictionary: Word[];
  private usedWords: number[];

  /** –––
   *  –– Constructor
   */
  constructor() {
    this.dictionary = wordDictionary;
    this.usedWords = [];
  }

  /** –––
   *  –– Public methods
   */
  getRandomWord() {
    const selectedIndex = this.getNextAvailableIndex();

    if (selectedIndex !== null) {
      this.usedWords.push(selectedIndex);
      return this.dictionary[selectedIndex];
    } else {
      return null;
    }

  }

  /** –––
   *  –– Helper methods
   */
  private getNextAvailableIndex() {

    if (!this.dictionary.length || this.dictionary.length === this.usedWords.length) {
      return null;
    }

    let selectedIndex = null;

    while (selectedIndex === null || this.usedWords.includes(selectedIndex)) {
      selectedIndex = Math.floor(Math.random() * this.dictionary.length);
    }

    return selectedIndex;
  }
}
