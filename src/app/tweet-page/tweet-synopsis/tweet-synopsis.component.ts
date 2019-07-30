import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tweet-synopsis',
  templateUrl: './tweet-synopsis.component.html',
  styleUrls: ['./tweet-synopsis.component.scss']
})
export class TweetSynopsisComponent implements OnInit {

  tweetData
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log("hello")
    this.httpService.syncTweet$
    .subscribe(data=>{
      this.tweetData = data;
    })
  }

  ngDoCheck(){
    console.log(this.tweetData)
  }

}
