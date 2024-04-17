import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { VaccationHistory } from "../../vaccation_history/schemas/vaccation_history.schemas";

export type VaccineDocument = HydratedDocument<Vaccine>;

@Schema()
export class Vaccine {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vaccation_history' }],
  })
  vaccation_histories: VaccationHistory[];


  @Prop()
  vaccine_type:string;


  @Prop()
  name: string;
}


export const VaccineSchema = SchemaFactory.createForClass(Vaccine);