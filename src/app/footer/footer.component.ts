import { Component, OnInit } from '@angular/core';
import { Tag } from '../model/tag.model';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  tags: Tag[] = []

  constructor(private apiService: TagsService) { }

  ngOnInit(): void {
    this.getTags()
  }

  getTags() {
    this.apiService.getTags().subscribe((data: Tag[]) => {
      this.tags = data
    })
  }
}
