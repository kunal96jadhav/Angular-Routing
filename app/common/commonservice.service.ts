import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginclass } from '../classes/loginclass';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }

  loginclass:Loginclass={
    username: '',
    password: ''
  }
}
