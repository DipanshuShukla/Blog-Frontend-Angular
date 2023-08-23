import { Component, Input } from '@angular/core';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-mini-blog',
  templateUrl: './mini-blog.component.html',
  styleUrls: ['./mini-blog.component.css']
})
export class MiniBlogComponent {
  @Input() randomBlog!: Blog
}
