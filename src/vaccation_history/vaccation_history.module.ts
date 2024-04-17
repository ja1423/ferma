import { Module } from '@nestjs/common';
import { VaccationHistoryService } from './vaccation_history.service';
import { VaccationHistoryController } from './vaccation_history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccationHistory, VaccationHistorySchema } from './schemas/vaccation_history.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: VaccationHistory.name,
        schema: VaccationHistorySchema,
      },
    ]),
  ],

  controllers: [VaccationHistoryController],
  providers: [VaccationHistoryService],
})
export class VaccationHistoryModule {}
