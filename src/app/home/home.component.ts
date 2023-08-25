import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Blog } from '../model/blog.model';
import { Tag } from '../model/tag.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomBlog!: Blog;
  curPage: Blog[] = [];
  nextPage: Blog[] = [];
  pageSize: number = 10;
  pageNumber: number = 1;
  tags!: Tag[];

  constructor(private apiService: HomeService) { }

  ngOnInit() {
    this.apiService.getRandomBlog().subscribe((data: Blog) => {
      this.randomBlog = data
      this.getPage()
    })

  }

  getPage() {
    this.apiService.getPagedBlog(this.randomBlog.blogid, this.pageSize, this.pageNumber).subscribe((data: Blog[]) => {
      this.curPage = data
    })

    this.apiService.getPagedBlog(this.randomBlog.blogid, this.pageSize, this.pageNumber + 1).subscribe((data: Blog[]) => {
      this.nextPage = data

    })

  }

  goToNextPage() {
    this.pageNumber++
    this.curPage = this.nextPage
    this.nextPage = []

    this.apiService.getPagedBlog(this.randomBlog.blogid, this.pageSize, this.pageNumber + 1).subscribe((data: Blog[]) => {
      this.nextPage = data

    })
  }

  goToPrevPage() {
    this.pageNumber--
    this.nextPage = this.curPage
    this.curPage = []

    this.apiService.getPagedBlog(this.randomBlog.blogid, this.pageSize, this.pageNumber).subscribe((data: Blog[]) => {
      this.curPage = data
    })
  }


}
