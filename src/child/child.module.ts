import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Child, ChildSchema } from './schemas/child.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Child.name,
        schema: ChildSchema,
      },
    ]),
  ],
  controllers: [ChildController],
  providers: [ChildService],
})
export class ChildModule {}
