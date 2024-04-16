import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, HydratedDocumentFromSchema } from "mongoose";

export type RecordOfIllnessDocument = HydratedDocument<RecordOfIllness>;

@Schema()
export class RecordOfIllness {
  @Prop()
  type: mongoose.Schema.Types.ObjectId;
  ref: 'Animal';
  animal_id: bigint;

  @Prop()
  illness_type: string;

  @Prop()
  date_disease: Date;

  @Prop()
  medicines: string;

  @Prop()
  date_treatment: Date;

  @Prop()
  illness_photo: string;

  @Prop()
  worker_id: bigint;
}


export const RecordOfIllnessSchema = SchemaFactory.createForClass(RecordOfIllness);