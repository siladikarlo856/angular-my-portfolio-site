import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids

const CONFIG = {
  space: 'fpzpms5vs6rj',
  accessToken:
    'v1BmfxiiZ1YOP3E0HoHFg7szNS5NvkUHNbXfvakJTb4',

  contentTypeIds: {
    blogPost: 'blogPost',
  },
};

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blogPost,
      //locale: 'hr-HR' // add custom parameter for different locale
    }, query))
    .then(res => res.items);
  }
}
