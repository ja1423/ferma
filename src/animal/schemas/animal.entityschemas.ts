import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { MeatProduction } from "../../meat_production/schemas/meat_production.schema";
import { FiberProduction } from "../../fiber_production/schemas/fiber_production.schemas";
import { VaccationHistory } from "../../vaccation_history/schemas/vaccation_history.schemas";
import { Feeding } from "../../feeding/schemas/feeding.schemasd";
import { Info } from "../../info/schemas/info.schemas";
import { Child } from "../../child/schemas/child.schemas";

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop()
  type: mongoose.Schema.Types.ObjectId;
  ref: 'AnimalType';
  animal_type_id: bigint;

  @Prop()
  photo: string;

  @Prop()
  unique_id: bigint;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'meat_production' }],
  })
  meat_productions: MeatProduction[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'fiber_production' }],
  })
  fiber_productions: FiberProduction[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vaccation_history' }],
  })
  vaccation_histories: VaccationHistory[];


  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'feeding' }],
  })
  feedings: Feeding[];


  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'info' }],
  })
  info: Info[];


  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'child' }],
  })
  child: Child[];




  






}



export const AnimalSchema = SchemaFactory.createForClass(Animal);