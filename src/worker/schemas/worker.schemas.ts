import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type WorkerDocument = HydratedDocument<Worker>;

@Schema()
export class Worker {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  experience: string;

  @Prop()
  phone_number: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  work_schedule: string;

  @Prop({
    type:mongoose.Schema.Types.ObjectId, 
    ref:'Speciality'
  })
  
  speciality_id:string;

  @Prop()
  token: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
