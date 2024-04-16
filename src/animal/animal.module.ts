import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './schemas/animal.entityschemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Animal.name,
        schema: AnimalSchema,
      },
    ]),
  ],

  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
