import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://erhussain52_db_user:7TDIXXo7pgG7G6Mu@cluster0.u7xamgi.mongodb.net/?appName=Cluster0'
    ),
    UsersModule,
  ],
})
export class AppModule {}
