import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine } from './schemas/vaccine.schemas';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
  constructor(@InjectModel(Vaccine.name)private vaccinesModel:Model<Vaccine>){}
  create(createVaccineDto: CreateVaccineDto) {
    return this.vaccinesModel.create(createVaccineDto);
  }

  findAll() {
    return this.vaccinesModel.find();
  }

  findOne(id: number) {
    return this.vaccinesModel.findOne({id});
  }

  update(id: number, updateVaccineDto: UpdateVaccineDto) {
    return this.vaccinesModel.updateOne({id, updateVaccineDto});
  }

  remove(id: number) {
    return this.vaccinesModel.deleteOne({id});
  }
}
