import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from './blog.service';
import { Blog } from '../model/blog.model';
import { BlogPage } from '../model/blog-page.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id?: string | null
  blog!: BlogPage
  authorGender!: string

  curPage: Blog[] = [];
  nextPage: Blog[] = [];
  pageSize: number = 6;
  pageNumber: number = 1;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getBlog(this.id!);
      window.scrollTo(0, 0);
    });

  }

  randomGender() {
    var arr = ['male', 'female']
    return arr[Math.floor(arr.length * Math.random())];
  }

  getBlog(id: string) {
    this.apiService.getBlog(id).subscribe((data: BlogPage) => {
      this.blog = data
      this.authorGender = this.randomGender()
      this.getPage()
    })
  }

  getPage() {
    this.apiService.getPagedBlog(this.blog.blogid, this.pageSize, this.pageNumber).subscribe((data: Blog[]) => {
      this.curPage = data
    })

    this.apiService.getPagedBlog(this.blog.blogid, this.pageSize, this.pageNumber + 1).subscribe((data: Blog[]) => {
      this.nextPage = data

    })

  }

  goToNextPage() {
    this.pageNumber++
    this.curPage = this.nextPage
    this.nextPage = []

    this.apiService.getPagedBlog(this.blog.blogid, this.pageSize, this.pageNumber + 1).subscribe((data: Blog[]) => {
      this.nextPage = data

    })
  }

  goToPrevPage() {
    this.pageNumber--
    this.nextPage = this.curPage
    this.curPage = []

    this.apiService.getPagedBlog(this.blog.blogid, this.pageSize, this.pageNumber).subscribe((data: Blog[]) => {
      this.curPage = data
    })
  }
}
