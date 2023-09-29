import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './controllers/animals/animalController';
import { AnimalServices } from './controllers/animals/animalServices';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AnimalController],
  providers: [AppService, AnimalServices],
})
export class AppModule { }
