import { getModelForClass } from "@typegoose/typegoose";
import { User } from "@/models/User";
import { Trip } from "@/models/Trip";

export const UserModel = getModelForClass(User);
export const TripModel = getModelForClass(Trip);