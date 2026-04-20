import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  itsId!: string;

  @Prop({ required: true })
  firstname!: string;

  @Prop({ required: true })
  lastname!: string;

  @Prop({ required: true })
  age!: string;

  @Prop({ required: true })
  grade!: string;

  @Prop({ required: true })
  interest!: string;

  @Prop()
  hobbies?: string;

  @Prop()
  goals?: string;

  @Prop()
  intro?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
