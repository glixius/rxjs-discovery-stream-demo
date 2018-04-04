/*
 * @Author: Gilberto López
 * @Date: 2018-04-03 21:51:01
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-04 05:30:31
 */

/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import { AppComponent } from './app.component';
import { WordService } from './services/word.service';

/* ––
 * –––– Module definition
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ WordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
