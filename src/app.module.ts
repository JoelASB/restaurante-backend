import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatosModule } from './platos/platos.module';
//import { MesasModule } from './mesas/mesas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(process.cwd(), 'db.sqlite'),
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlatosModule,
    //MesasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
