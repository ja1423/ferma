import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type MilkProductionDocument = HydratedDocument<MilkProduction>;

@Schema()
export class MilkProduction {
    @Prop()
    milk_yield: bigint;


    @Prop()
    milk_schedule: bigint;

    @Prop()
    milk_quality: bigint;

    @Prop()
    type: mongoose.Schema.Types.ObjectId;
    ref: 'Animal';
    animal_id: bigint;
}

export const MilkProductionSchema = SchemaFactory.createForClass(MilkProduction);
