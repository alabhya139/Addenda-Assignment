import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TweetGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if(localStorage.getItem('authToken')!==undefined && localStorage.getItem('authToken')!=="" && localStorage.getItem('authToken')!==null){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
