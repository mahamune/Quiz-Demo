import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {NgxLocalStorageModule} from 'ngx-localstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizeComponent } from './quize/quize.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizeComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLocalStorageModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'quiz',
        component: QuizeComponent
     },
      {
         path: 'result',
         component: ReviewComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
