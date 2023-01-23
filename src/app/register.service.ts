import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  _url = 'http://localhost:3000/register';
  constructor(private _http: HttpClient) { }

  register(proj: Project) {
    return this._http.post<any>(this._url, proj)
  }
}
