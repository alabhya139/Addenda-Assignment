import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetSynopsisComponent } from './tweet-synopsis/tweet-synopsis.component';

const routes: Routes = [
  {
    path: '',
    component: TweetListComponent
  },
  {
    path: 'tweet-synopsis',
    component: TweetSynopsisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetPageRoutingModule { }
