/*
 * @Author: Gilberto López
 * @Date: 2018-04-04 05:12:00
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 13:44:50
 */

/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

 import { LetterState } from './enums/letter-state.enum';

/* ––
 * –––– Words
 * –––––––––––––––––––––––––––––––––– */

export const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const wordDictionary = [
  {
    resolved: false,
    letters: [
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered }
  ]},
  {
    resolved: false,
    letters: [
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered }
  ]},
  {
    resolved: false,
    letters: [
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered }
  ]},
  {
    resolved: false,
    letters: [
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'J', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'M', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered }
  ]},
  {
    resolved: false,
    letters: [
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'Y', state: LetterState.Undiscovered }
  ]},
  {
    resolved: false,
    letters: [
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered }
  ]},
  {
    resolved: false,
    letters: [
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered }
  ]}
];
