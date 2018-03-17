import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post';
import { PostsService } from '../posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [PostsService]
})
export class NewsComponent implements OnInit {

 posts: Post[];
 private static readonly NOTAS_DE_PRENSA = 5;

 constructor(private postsService: PostsService, private router: Router) {
 }

  //TODO(hernandezj): to use it 
  getNewsNotesValue() {
    return NewsComponent.NOTAS_DE_PRENSA;
  }

  getPosts(){
	this.postsService.getPosts()
        .map(p => { 
              p.filter(e => e.categories.includes(NewsComponent.NOTAS_DE_PRENSA)); 
              return p;
        })
        .subscribe(res => { this.posts = res.slice(0, 3); });
  }

  ngOnInit() {
    this.getPosts();
  }

}