import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "....",
    database: "login",
    autoLoadModels: true,
    synchronize: true,
    sync: { force: false }
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
