import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {

  private _wpBase = "http://hbsc.psicomemorias.com/wp-json/wp/v2/";

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this._wpBase + 'posts').map((res: Response) => {
      let posts:Array<Post> = [];
      for (var i = 0; i < res.json().length; i++) {
        let post = <Post>{};
        this.getImageAddress(res.json()[i].featured_media).subscribe(res =>{
          post.featuredImageLink = res; }
        );
        post.excerpt = res.json()[i].excerpt.rendered;
        post.content = res.json()[i].content.rendered;
        post.title = res.json()[i].title.rendered;
        post.slug = res.json()[i].slug;
        post.categories = res.json()[i].categories;
        posts.push(post);         
      }
      return posts;
    });
  }

  getPost(slug): Observable<Post> {
    return this.http.get(this._wpBase + `posts?slug=${slug}`).map((res: Response) => {
      let post = new Post();
      this.getImageAddress(res.json()[0].featured_media).subscribe(res => {
        post.featuredImageLink = res; }
      );
      post.content = res.json()[0].content.rendered;
      post.title = res.json()[0].title.rendered;

      return post;
    });
  }

  getImageAddress(imageID): Observable<string> {
    return this.http.get(this._wpBase + `media/${imageID}`).map((res: Response) => {
      return res.json().media_details.sizes.large.source_url;
    });
  }

}
