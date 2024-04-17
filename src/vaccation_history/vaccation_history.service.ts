import { Injectable } from '@nestjs/common';
import { CreateVaccationHistoryDto } from './dto/create-vaccation_history.dto';
import { UpdateVaccationHistoryDto } from './dto/update-vaccation_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VaccationHistory } from './schemas/vaccation_history.schemas';
import { Model } from 'mongoose';

@Injectable()
export class VaccationHistoryService {
  constructor(@InjectModel(VaccationHistory.name) private vaccationModel:Model<VaccationHistory>) {}
  create(createVaccationHistoryDto: CreateVaccationHistoryDto) {
    return this.vaccationModel.create(createVaccationHistoryDto);
  }

  findAll() {
    return this.vaccationModel.find();
  }

  findOne(id: number) {
    return this.vaccationModel.findById({id});
  }

  update(id: number, updateVaccationHistoryDto: UpdateVaccationHistoryDto) {
    return this.vaccationModel.updateOne({id, updateVaccationHistoryDto});
  }

  remove(id: number) {
    return this.vaccationModel.deleteOne({id});
  }
}
