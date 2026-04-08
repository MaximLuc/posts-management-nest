import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './interfaces/post.interface';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto): Post {
    const post: Post = {
      id: uuidv4(),
      ...createPostDto,
    };

    return this.postsRepository.create(post);
  }

  findAll(page: number, limit: number): Post[] {
    this.validatePagination(page, limit);
    return this.postsRepository.findAll(page, limit);
  }

  findOne(id: string): Post {
    const post = this.postsRepository.findOne(id);

    if (!post) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }

    return post;
  }

  update(id: string, updatePostDto: UpdatePostDto): Post {
    this.findOne(id);

    const updatedPost = this.postsRepository.update(id, updatePostDto);

    if (!updatedPost) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }

    return updatedPost;
  }

  delete(id: string): void {
    const isDeleted = this.postsRepository.delete(id);

    if (!isDeleted) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }
  }

  private validatePagination(page: number, limit: number): void {
    if (page < 1 || limit < 1) {
      throw new BadRequestException('Pagination parameters must be greater than 0');
    }
  }
}
