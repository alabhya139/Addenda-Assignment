import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {
  tweetData;

  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrService) { }

  ngOnInit() {
    this.httpService.getTweets()
    .subscribe(data=>{
      console.log(data)
      this.tweetData = data;
    },
    error=>{
      
      if(error.error.error = 'Auth token is expired'){
        this.toaster.error('Error',error.error.error);
        localStorage.clear();
        this.router.navigate(['login']);
      }
    })
  }

  syncTweet(index){
    let i = 2;
    this.httpService.syncTweet(this.tweetData[index]);
    this.router.navigate(['tweets/tweet-details']);
  }

}
