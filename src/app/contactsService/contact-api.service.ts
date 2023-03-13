import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ContactAPIService {

  constructor(public http : HttpClient ) { }

  getAllUserInfo(): Observable<any>{
    let url = `${environment.base_URL}/`;
    return this.http.get(url);
  }

  newUsersInfo(obj:any): Observable<any>{
    let url = `${environment.base_URL}/`;
    return this.http.post(url,obj)
  }
}
