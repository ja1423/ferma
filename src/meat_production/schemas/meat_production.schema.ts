import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { HydratedDocument } from "mongoose";

export type MeatProductionDocument = HydratedDocument<MeatProduction>;

@Schema()
export class MeatProduction {
    @Prop()
    meat_yield:bigint


    @Prop()
    slaughter_date:bigint


    @Prop()
    shearing_schedule:bigint


    @Prop()
    type:mongoose.Schema.Types.ObjectId 
    ref:'Animal'
    animal_id:bigint
}

export const MeatProductionSchema = SchemaFactory.createForClass(MeatProduction);

