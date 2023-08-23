import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../model/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(environment.tagsAPI)
  }
}
