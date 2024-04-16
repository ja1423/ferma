import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MeatProduction } from './schemas/meat_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MeatProductionService {
  constructor(
    @InjectModel(MeatProduction.name)
   private meatProductionModel: Model<MeatProduction>,
  ) {}

  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProductionModel.create(createMeatProductionDto);
  }

  findAll() {
    return this.findOne;
  }

  findOne(id: number) {
    return `This action returns a #${id} meatProduction`;
  }

  update(id: number, updateMeatProductionDto: UpdateMeatProductionDto) {
    return `This action updates a #${id} meatProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} meatProduction`;
  }
}
