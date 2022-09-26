import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  signUp(){
    this.http.post<any>("https://63313da83ea4956cfb5963c3.mockapi.io/LoginAppData/post",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful");
      this.signupForm.reset();
      this.route.navigate(['login']);
    },err=>{
      alert("Something went wrong!");
    })
  }
}
