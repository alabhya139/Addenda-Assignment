import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ApiLogin } from '../models/api.login';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  loginUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g';

  constructor(private http: HttpClient) { }

  public login(loginPayload): Observable<ApiLogin> {
    return <Observable<ApiLogin>>this.http.post<ApiLogin>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g` ,loginPayload);
  }

  public getTweets(){
    return this.http.get(` https://angular-sample-twitter.firebaseio.com/tweets.json`);
  }

  private tweetSubject = new BehaviorSubject<any>(null);

  syncTweet$ = this.tweetSubject.asObservable();

  syncTweet(tweetData){
    this.tweetSubject.next(tweetData);
  }
}
