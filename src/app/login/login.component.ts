import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiLogin } from '../models/api.login';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private loginResponse: ApiLogin;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
      returnSecureToken: [true],
    })
  }

  onSubmit() {
    let loginPayload = this.loginForm.value;

    this.httpService.login(loginPayload)
    .subscribe(data=>{
      this.loginResponse = data;

      if(this.loginResponse!==undefined && this.loginResponse!==null){
        localStorage.setItem('authToken',this.loginResponse.idToken);
        this.router.navigate(['tweets'])
      }
    })
  }

}
