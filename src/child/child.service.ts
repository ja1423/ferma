import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Child } from './schemas/child.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ChildService {
  constructor(@InjectModel(Child.name)private childModel:Model<Child>){

  }
  create(createChildDto: CreateChildDto) {
    return this.childModel.create(createChildDto);
  }

  findAll() {
    return this.childModel.find();
  }

  findOne(id: number) {
    return this.childModel.findById({id});
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return this.childModel.updateOne({id},updateChildDto);
  }

  remove(id: number) {
    return this.childModel.deleteOne({id});;
  }
}
