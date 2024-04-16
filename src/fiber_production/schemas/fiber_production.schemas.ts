import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type FiberProductionDocument = HydratedDocument<FiberProduction>;

@Schema()
export class FiberProduction {
  @Prop()
  fiber_yield: bigint;

  @Prop()
  shearing_schedule: bigint;

  @Prop()
  fiber_quality: bigint;

  @Prop()
  type: mongoose.Schema.Types.ObjectId;
  ref: 'Animal';
  animal_id: bigint;
}


export const FiberProductionSchema = SchemaFactory.createForClass(FiberProduction);

