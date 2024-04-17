import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VaccationHistoryDocument = HydratedDocument<VaccationHistory>;

@Schema()
export class VaccationHistory {
  @Prop()
  type: mongoose.Schema.Types.ObjectId;
  ref: 'Animal';
  animal_id: string;

  @Prop()
  types: mongoose.Schema.Types.ObjectId;
  reference: 'vaccine';
  vaccine_type_id: Date;

  @Prop()
  date_vaccinated: Date;

  @Prop()
  next_date_vaccination: bigint;

  @Prop()
  date_vaccination_photo: string;

  @Prop()
  typ: mongoose.Schema.Types.ObjectId;
  refe: 'Worker';
  worker_id: bigint;
}

export const VaccationHistorySchema = SchemaFactory.createForClass(
  VaccationHistory
);
