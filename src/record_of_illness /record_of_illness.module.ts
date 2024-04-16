import { Module } from '@nestjs/common';
import { RecordOfIllnessService } from './record_of_illness.service';
import { RecordOfIllnessController } from './record_of_illness.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordOfIllness, RecordOfIllnessSchema } from './schemas/record_of_illness.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RecordOfIllness.name,
        schema: RecordOfIllnessSchema,
      },
    ]),
  ],

  controllers: [RecordOfIllnessController],
  providers: [RecordOfIllnessService],
})
export class RecordOfIllnessModule {}
