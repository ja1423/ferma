import { Module } from '@nestjs/common';
import { RecordsOfFeedingService } from './records_of_feeding.service';
import { RecordsOfFeedingController } from './records_of_feeding.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsOfFeeding, RecordsOfFeedingSchema } from './schemas/records_of_feeding.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RecordsOfFeeding.name,
        schema: RecordsOfFeedingSchema,
      },
    ]),
  ],
  controllers: [RecordsOfFeedingController],
  providers: [RecordsOfFeedingService],
})
export class RecordsOfFeedingModule {}
