/*
 * @Author: Gilberto López
 * @Date: 2018-04-04 04:54:46
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 04:57:52
 */

/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

import { LetterState } from '../enums/letter-state.enum';

 /* ––
 * –––– Interface definition
 * –––––––––––––––––––––––––––––––––– */

 export interface Letter {
   value: string;
   state: LetterState;
 }
