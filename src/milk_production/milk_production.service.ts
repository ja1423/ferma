import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { MilkProduction } from './schemas/milk_production.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MilkProductionService {
  constructor(@InjectModel(MilkProduction.name) private milkProductionModel: Model<MilkProduction>){}

  create(createMilkProductionDto: CreateMilkProductionDto) {

    return this.milkProductionModel.create(createMilkProductionDto);
  }

  findAll() {
    return this.milkProductionModel.find();
  }

  findOne(id: number) {
    return this.milkProductionModel.findOne({id});
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.milkProductionModel.updateOne({id, updateMilkProductionDto});
  }

  remove(id: number) {
    return this.milkProductionModel.deleteOne({id});
  }
}
