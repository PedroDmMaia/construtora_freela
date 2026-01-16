import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS, BlogPost, getCategories, getFeaturedPost } from '../../shared/data/blog.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts: BlogPost[] = BLOG_POSTS;
  filteredPosts: BlogPost[] = BLOG_POSTS;
  featuredPost = getFeaturedPost();
  categories = getCategories();
  selectedCategory = '';

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category) {
      this.filteredPosts = this.posts.filter(post => post.category === category);
    } else {
      this.filteredPosts = this.posts;
    }
  }

  subscribeNewsletter() {
    alert('Inscrição realizada com sucesso!');
  }
}
