import { Users } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const getalluser = async () => {
  const data = await Users.findAll();
  return data;
}

export const signUp = async (body) => {
  const data = await Users.findOne({ where: { email: body.email } });
  if (!data) {

    const saltround = 10;
    const hashPassword = await bcrypt.hash(body.password, saltround);
    body.password = hashPassword;

    await Users.create(body);
    return 'the sign up is created succefully'
  } else {
    return 'already the user is created';

  }
}



export const login = async (body) => {
  const data = await Users.findOne({ where: { email: body.email } });

  if (!data) {
    return 'the email id doesnt exist'
  } else {
    const password_isvalid = await bcrypt.compare(body.password, data.password);
    if (password_isvalid) {

      const token = await jwt.sign({ username: data.firstname, email: data.email, user_id: data.user_id }, process.env.jwt_sceret_key)

      return token
    } else {
      throw new Error("the password is incorrect");
    }
  }



}