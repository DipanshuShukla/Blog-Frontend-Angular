import { Component, Input } from '@angular/core';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent {
  @Input() rows: number = 5;
  @Input() cols: number = 2;
  @Input() blogs: Blog[] = []
}
