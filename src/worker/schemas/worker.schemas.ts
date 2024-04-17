import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { VaccationHistory } from '../../vaccation_history/schemas/vaccation_history.schemas';
import { Feeding } from '../../feeding/schemas/feeding.schemasd';

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speciality',
  })
  speciality_id: string;

  @Prop()
  token: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vaccation' }],
  })
  vaccation: VaccationHistory[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'feeding' }],
  })
  feedings: Feeding[];
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
