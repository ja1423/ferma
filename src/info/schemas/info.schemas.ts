import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type InfoDocument = HydratedDocument<Info>;

@Schema()
export class Info {
    @Prop()
    weight: string;



    @Prop()
    height: string;

    @Prop()
    color: string;



    @Prop()
    gender: string;

    @Prop()
    breed: string;

    @Prop()
    birth_or_acquisition: string;


    @Prop()
    block:boolean


    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Animal'})
    animal_id: string;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
