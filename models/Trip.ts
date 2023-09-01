import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Trip {
  @prop({ default: () => nanoid(9) })
  public _id: string;

  @prop()
  public name: string;



  @prop({ default: () => new Date() })
  public createdAt: Date;
}
