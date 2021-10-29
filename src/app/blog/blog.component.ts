import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: Entry<any>[] = [];

  constructor(
    private blogDataService: BlogDataService
  ) { }

  ngOnInit(): void {
    this.blogDataService.getBlogPosts()
    .then(blogPosts => this.blogPosts = blogPosts);
  }

}

