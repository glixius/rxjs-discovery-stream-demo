/*
 * @Author: Gilberto López
 * @Date: 2018-04-04 05:12:00
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-14 10:29:23
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
    finished: false,
    letters: [
    { value: 'M', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'K', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'Y', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'F', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'H', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'M', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'Z', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'F', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'H', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'Z', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'J', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'M', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'W', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'J', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'K', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'H', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'Z', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'G', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'J', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'X', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'B', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'F', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'W', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'W', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'H', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'V', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'X', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'L', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'O', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'T', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'H', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered },
    { value: 'D', state: LetterState.Undiscovered },
    { value: 'A', state: LetterState.Undiscovered }
  ]},
  {
    finished: false,
    letters: [
    { value: 'U', state: LetterState.Undiscovered },
    { value: 'S', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: ' ', state: LetterState.Discovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'X', state: LetterState.Undiscovered },
    { value: 'P', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'R', state: LetterState.Undiscovered },
    { value: 'I', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered },
    { value: 'N', state: LetterState.Undiscovered },
    { value: 'C', state: LetterState.Undiscovered },
    { value: 'E', state: LetterState.Undiscovered }
  ]}
];
