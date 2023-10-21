import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog.model';
import { environment } from 'src/environments/environment';
import { BlogPage } from '../model/blog-page.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlog(id: string): Observable<BlogPage> {
    return this.http.get<BlogPage>(environment.blogAPI + '/' + id)
  }

  getPagedBlog(excluded_id: number, pageSize: number, pageNo: number): Observable<Blog[]> {
    return this.http.get<Blog[]>(environment.pagedBlogAPI + "?" + "excluded_id=" + excluded_id + "&" + "pageSize=" + pageSize + "&" + "pageNo=" + pageNo)
  }
}
