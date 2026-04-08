import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsRepository {
  private readonly posts: Post[] = [];

  create(post: Post): Post {
    this.posts.push(post);
    return post;
  }

  findAll(page: number, limit: number): Post[] {
    const startIndex = (page - 1) * limit;
    return this.posts.slice(startIndex, startIndex + limit);
  }

  findOne(id: string): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  update(id: string, updatedFields: Partial<Omit<Post, 'id'>>): Post | undefined {
    const post = this.findOne(id);

    if (!post) {
      return undefined;
    }

    Object.assign(post, updatedFields);
    return post;
  }

  delete(id: string): boolean {
    const initialLength = this.posts.length;
    const filteredPosts = this.posts.filter((post) => post.id !== id);

    if (filteredPosts.length === initialLength) {
      return false;
    }

    this.posts.length = 0;
    this.posts.push(...filteredPosts);
    return true;
  }
}
