import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login() {
    this.http.get<any>("https://63313da83ea4956cfb5963c3.mockapi.io/LoginAppData/").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });

      if(user){
      alert("Login success!");
      this.route.navigate(['dashboard']);
      }
      
      else{
        alert("User not found");
      }
      
    }
    ,err=>{
      alert("Something went wrong!");
    })
  }

}
