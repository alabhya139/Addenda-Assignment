import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetPageRoutingModule } from './tweet-page-routing.module';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetSynopsisComponent } from './tweet-synopsis/tweet-synopsis.component';

@NgModule({
  declarations: [TweetListComponent, TweetSynopsisComponent],
  imports: [
    CommonModule,
    TweetPageRoutingModule
  ]
})
export class TweetPageModule { }
