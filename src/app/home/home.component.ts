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
  curPage!: Blog[];
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
    this.apiService.getPagedBlog(this.randomBlog.blogid, 10, 1).subscribe((data: Blog[]) => {
      this.curPage = data
    })
  }

  nextPage() {
    this.pageNumber++
    this.getPage()
  }

  prevPage() {
    this.pageNumber--
    this.getPage()
  }


}
