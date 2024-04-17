import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "../../animal/schemas/animal.entityschemas";

export type AnimalTypeDocument = HydratedDocument<AnimalType>;

@Schema()
export class AnimalType {
  @Prop()
  type_name: string;

  @Prop()
  description: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],
  })
  fiber_productions: Animal[];
}

export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
