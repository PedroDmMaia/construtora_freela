import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getBlogPostBySlug, BlogPost, BLOG_POSTS } from '../../shared/data/blog.data';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.post = getBlogPostBySlug(slug);
      
      if (this.post) {
        this.relatedPosts = BLOG_POSTS
          .filter(p => p.id !== this.post!.id && p.category === this.post!.category)
          .slice(0, 2);
        
        if (this.relatedPosts.length < 2) {
          const otherPosts = BLOG_POSTS
            .filter(p => p.id !== this.post!.id && !this.relatedPosts.includes(p))
            .slice(0, 2 - this.relatedPosts.length);
          this.relatedPosts = [...this.relatedPosts, ...otherPosts];
        }
      }
    });
  }
}
