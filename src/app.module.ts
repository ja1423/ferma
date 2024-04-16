import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { SpecialityModule } from './speciality/speciality.module';
import { MeatProductionModule } from './meat_production/meat_production.module';
import { AnimalModule } from './animal/animal.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';


@Module({
  imports: [
    ConfigModule.forRoot ({envFilePath: '.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    WorkerModule,
    SpecialityModule,
    MeatProductionModule,
    AnimalModule,
    FiberProductionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
