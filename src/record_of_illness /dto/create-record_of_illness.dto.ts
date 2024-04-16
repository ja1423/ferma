export class CreateRecordOfIllnessDto {
  animal_id: bigint;

  illness_type: string;

  date_disease: Date;

  medicines: string;

  date_treatment: Date;

  illness_photo: string;

  worker_id: bigint;
}
