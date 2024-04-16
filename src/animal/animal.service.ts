import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schemas/animal.entityschemas';
import { Model } from 'mongoose';

@Injectable()
export class AnimalService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>){}

  create(createAnimalDto: CreateAnimalDto) {
    return this.animalModel.create(createAnimalDto)
  }

  findAll() {
    return this.animalModel.find().populate('meat_production');
  }

  findOne(id: number) {
    return this.animalModel.findOne({id});
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.findOneAndUpdate({id, updateAnimalDto});
  }

  remove(id: number) {
    return this.animalModel.deleteOne({id});
  }
}
