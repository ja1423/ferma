import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { SpecialityModule } from './speciality/speciality.module';
import { MeatProductionModule } from './meat_production/meat_production.module';
import { AnimalModule } from './animal/animal.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { RecordOfIllnessModule } from './record_of_illness /record_of_illness.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { VaccationHistoryModule } from './vaccation_history/vaccation_history.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { FeedingModule } from './feeding/feeding.module';
import { InfoModule } from './info/info.module';
import { FarmAnimalsModule } from './farm_animals/farm_animals.module';
import { ChildModule } from './child/child.module';
import { RecordsOfFeedingModule } from './records_of_feeding/records_of_feeding.module';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    WorkerModule,
    SpecialityModule,
    MeatProductionModule,
    AnimalModule,
    FiberProductionModule,
    RecordOfIllnessModule,
    MilkProductionModule,
    AnimalTypeModule,
    VaccationHistoryModule,
    VaccineModule,
    FeedingModule,
    InfoModule,
    FarmAnimalsModule,
    ChildModule,
    RecordsOfFeedingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
