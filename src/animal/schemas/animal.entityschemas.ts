import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { MeatProduction } from "../../meat_production/schemas/meat_production.schema";

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop()
  animal_type_id: bigint;

  @Prop()
  photo: string;

  @Prop()
  unique_id: bigint;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'meat_production' }] })
  meat_productions: MeatProduction[];
}



export const AnimalSchema = SchemaFactory.createForClass(Animal);