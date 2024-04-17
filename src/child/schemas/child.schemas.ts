import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ChildDocument = HydratedDocument<Child>;

@Schema()
export class Child {
  @Prop()
  gender: string;

  @Prop()
  date_of_birth: string;

  @Prop()
  birth_height: string;

  @Prop()
  color: string;

  @Prop()
  types: mongoose.Schema.Types.ObjectId;
  refs: 'Animal';
  animal_id: string;
}

export const ChildSchema = SchemaFactory.createForClass(Child);
