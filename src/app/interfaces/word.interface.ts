/*
 * @Author: Gilberto López
 * @Date: 2018-04-04 05:10:44
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 13:44:13
 */

/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

import { Letter } from './letter.interface';

 /* ––
 * –––– Interface definition
 * –––––––––––––––––––––––––––––––––– */

 export interface Word {
   letters: Letter[];
   resolved: boolean;
 }
