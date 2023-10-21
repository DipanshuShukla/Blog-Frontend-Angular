import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag.model';
import { environment } from 'src/environments/environment';
import { NewsLetterSubscription } from '../model/news-letter-subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribtionService {

  constructor(private http: HttpClient) { }

  subscribeNewsletter(email: NewsLetterSubscription): Observable<NewsLetterSubscription> {
    return this.http.post<NewsLetterSubscription>(environment.newsletterAPI, email)
  }
}
