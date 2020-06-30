import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://87.250.59.231:3000';

  createImage(image): Observable<any> {
    let formData = new FormData();
    formData.append('content', image);
    return this.http.post(this.baseUrl + '/photos', formData);
  }
}
