import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UrlService {

  constructor(private http: HttpClient) { }

  shortenUrl(url): Observable<any> {
    const body = new HttpParams()
      .set('url', url);
  
    return this.http.post('/url',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  


}
