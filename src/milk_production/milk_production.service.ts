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
    return this.milkProductionModel;
  }

  findOne(id: number) {
    return `This action returns a #${id} milkProduction`;
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return `This action updates a #${id} milkProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} milkProduction`;
  }
}
