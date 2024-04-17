import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type RecordsOfFeedingDocument = HydratedDocument<RecordsOfFeeding>;

@Schema()
export class RecordsOfFeeding {
  @Prop()
  date: Date;

  @Prop()
  consumption: string;

  @Prop()
  types: mongoose.Schema.Types.ObjectId;
  refs: 'Feeding';
  feeding_id: number;
}


export const RecordsOfFeedingSchema = SchemaFactory.createForClass(RecordsOfFeeding);