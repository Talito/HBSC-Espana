import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

  posts: Post[];
  activeFilter: number;
  private static readonly NOTAS_DE_PRENSA = 5;
  private static readonly FACTSHEETS = 4;

  constructor(private postsService: PostsService, private router: Router) {
  }

  //TODO: refactor
  switchFilter(filter): void {
      if (filter == 'notas') {
        if (this.activeFilter == PostListComponent.NOTAS_DE_PRENSA) {
          this.activeFilter = undefined;
        } else {
          this.activeFilter = PostListComponent.NOTAS_DE_PRENSA;
        }
      } else {
        if (this.activeFilter == PostListComponent.FACTSHEETS) {
          this.activeFilter = undefined;
        } else {
          this.activeFilter = PostListComponent.FACTSHEETS;
        }
      }
      this.postsService.getPosts()
        .map(p => { 
              p.filter(e => e.categories.includes(this.activeFilter)); 
              return p;
        })
        .subscribe(res => { this.posts = res.slice(0, 3); });
  }

  getPosts(){
    this.postsService.getPosts().subscribe(res => { this.posts = res.slice(0, 3); });
  }

  ngOnInit() {
    this.getPosts();
  }
  
  selectPost(slug) {
    this.router.navigate(['/factsheets/' + slug]);
  }
}
