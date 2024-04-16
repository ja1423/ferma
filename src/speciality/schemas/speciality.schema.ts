import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Worker } from '../../worker/schemas/worker.schemas';

export type SpecialityDocument = HydratedDocument<Speciality>;

@Schema()
export class Speciality {
  @Prop({required:true})
  title: string;

  
  @Prop()
  description: string;
  @Prop({type:[{ type:mongoose.Schema.Types.ObjectId, 
    ref:'workers'}]})
  workers: Worker[];
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);

