/*
 * @Author: Gilberto López
 * @Date: 2018-04-03 21:54:06
 * @Last Modified by: Gilberto López
 * @Last Modified time: 2018-04-03 21:54:51
 */

 /* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */

//  Platform imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// App imports
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* ––
 * –––– Application bootstrap
 * –––––––––––––––––––––––––––––––––– */
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
