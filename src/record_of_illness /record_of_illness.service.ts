import { Injectable } from '@nestjs/common';
import { CreateRecordOfIllnessDto } from './dto/create-record_of_illness.dto';
import { UpdateRecordOfIllnessDto } from './dto/update-record_of_illness.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOfIllness } from './schemas/record_of_illness.schemas';
import { Model } from 'mongoose';

@Injectable()
export class RecordOfIllnessService {
  constructor(@InjectModel(RecordOfIllness.name) private recordofillnessModel: Model<RecordOfIllness>) {}

  create(createRecordOfIllnessDto: CreateRecordOfIllnessDto) {
    return this.recordofillnessModel.create(createRecordOfIllnessDto);
  }

  findAll() {
    return this.recordofillnessModel.find();
  }

  findOne(id: number) {
    return this.recordofillnessModel.findOne({id});
  }

  update(id: number, updateRecordOfIllnessDto: UpdateRecordOfIllnessDto) {
    return this.recordofillnessModel.updateOne({id},updateRecordOfIllnessDto);
  }

  remove(id: number) {
    return this.recordofillnessModel.deleteOne({id});
  }
}
