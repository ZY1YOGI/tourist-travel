import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class User {
  @prop({ default: () => nanoid(9) })
  public _id: string;

  @prop()
  public name: string;

  @prop()
  public email: string;

  @prop()
  public password: string;

  @prop({ default: () => new Date() })
  public createdAt: Date;
}
