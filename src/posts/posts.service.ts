import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './models/post.model';
import { FilesService } from '../files/files.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post, private readonly fileService: FilesService) {}
  
    async create(createPostDto: CreatePostDto, image: any){
      const fileName = await this.fileService.createFile(image);
      const post = await this.postRepository.create({
        ...createPostDto,
        image: fileName
      });
      return post;
    };

   async findAll() {
    const posts = await this.postRepository.findAll({include: {all:true}})
    return posts;
  };

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postRepository.update(updatePostDto, {
      where: {id},
      returning: true
    });
  };

  async remove(id: number) {
    return await this.postRepository.destroy({where: {id}});
  }
}
