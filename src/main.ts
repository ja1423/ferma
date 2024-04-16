import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function start(){
  try {
     
        const PORT=process.env.PORT||3333;
        const app=await NestFactory.create(AppModule)
        app.setGlobalPrefix('api')
         
          app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, () => {
      console.log(`Server ${PORT} portda ishga tushdi`);
    })
  } catch (error) {
    console.log(error);
  }
}
start();

