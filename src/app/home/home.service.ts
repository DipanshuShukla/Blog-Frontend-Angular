import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../model/tag.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getRandomBlog(): Observable<Blog> {
    return this.http.get<Blog>(environment.randomBlogAPI)
  }

  getPagedBlog(excluded_id: number, pageSize: number, pageNo: number): Observable<Blog[]> {
    return this.http.get<Blog[]>(environment.pagedBlogAPI + "?" + "excluded_id=" + excluded_id + "&" + "pageSize=" + pageSize + "&" + "pageNo=" + pageNo)
  }
}
