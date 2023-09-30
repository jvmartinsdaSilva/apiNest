import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AnimalController } from './controllers/animals/animalController';
// import { AnimalServices } from './controllers/animals/animalServices';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, PostService, PrismaService],
})
export class AppModule { }
