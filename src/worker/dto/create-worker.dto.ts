import mongoose from "mongoose";

export class CreateWorkerDto {
  name: string;

  age: number;

  experience: string;

  phone_number: number;

  username: string;

  password: string;

  work_schedule: string[];

  speciality_id:mongoose.Schema.Types.ObjectId;

  
}
