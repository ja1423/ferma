import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordsOfFeeding } from './schemas/records_of_feeding.schemas';
import { Model } from 'mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(@InjectModel(RecordsOfFeeding.name)private recordofffedingModel:Model<RecordsOfFeeding>){}
  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.recordofffedingModel.create(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.recordofffedingModel.find();
  }

  findOne(id: number) {
    return this.recordofffedingModel.findOne({id});
  }

  update(id: number, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return this.recordofffedingModel.updateOne({id, updateRecordsOfFeedingDto});
  }

  remove(id: number) {
    return this.recordofffedingModel.deleteOne({id});
  }
}
