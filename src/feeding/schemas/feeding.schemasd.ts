import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { RecordsOfFeeding } from "../../records_of_feeding/schemas/records_of_feeding.schemas";


export type FeedingDocument = HydratedDocument<Feeding>;

@Schema()
export class Feeding {
  @Prop()
  type: mongoose.Schema.Types.ObjectId;
  ref: 'Animal';
  animal_id: bigint;

  @Prop()
  feeding_schedule: string;

  @Prop()
  type_of_feed: string;

  @Prop()
  dieyary: string;

  @Prop()
  types: mongoose.Schema.Types.ObjectId;
  refs: 'Worker';
  worker_id: bigint;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'records_of_feeding' }],
  })
  records_of_feeding: RecordsOfFeeding[];
}

export const FeedingSchema = SchemaFactory.createForClass(Feeding);