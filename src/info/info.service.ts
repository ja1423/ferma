import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Info } from './schemas/info.schemas';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(Info.name) private infoModel:Model<Info>){

  }
  create(createInfoDto: CreateInfoDto) {
    return this.infoModel.create(createInfoDto);
  }

  findAll() {
    return  this.infoModel.find();
  }

  findOne(id: number) {
    return this.infoModel.findById({id});
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    return this.infoModel.updateOne({id, updateInfoDto});
  }

  remove(id: number) {
    return this.infoModel.deleteOne({id});
  }
}
