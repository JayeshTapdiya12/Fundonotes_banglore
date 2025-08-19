import { Users } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
import { sendMail } from "../utils/emailsender";

export const getalluser = async () => {
  const data = await Users.findAll();
  return {
    code: 200,
    data: data,
    succues: true,
    message: "the user list "

  }
}

export const signUp = async (body) => {
  const data = await Users.findOne({ where: { email: body.email } });
  if (!data) {

    const saltround = 10;
    const hashPassword = await bcrypt.hash(body.password, saltround);
    body.password = hashPassword;

    await Users.create(body);
    return {
      code: 200,

      succues: true,
      message: "user email is created"

    }
  } else {
    return {
      code: 200,

      succues: false,
      message: "user email is already exist!"

    };

  }
}

export const login = async (body) => {
  const data = await Users.findOne({ where: { email: body.email } });

  if (!data) {
    return {
      code: 200,

      succues: false,
      message: "user email not exist!"

    }
  } else {
    const password_isvalid = await bcrypt.compare(body.password, data.password);
    if (password_isvalid) {

      const token = await jwt.sign({ username: data.firstname, email: data.email, user_id: data.user_id }, process.env.jwt_sceret_key)

      return {
        code: 200,
        data: {
          token: token,
          name: data.firstName,
          email: data.email
        },
        succues: true,
        message: "user login succesfully!"

      }

    } else {
      return {
        code: 400,

        succues: false,
        message: "password is invalid "

      }
    }
  }
}


export const forgetpassword = async (body) => {

  const data = await Users.findOne({ where: { email: body.email } });

  if (!data) {
    return {
      code: 400,
      succues: false,
      message: "the email does not exist"
    }
  } else {
    const token = jwt.sign({ email: data.email, userName: data.firstName, userId: data.user_id }, process.env.jwt_sceret_key);
    await sendMail(data.email, token);

    return {
      code: 200,
      success: true,
      message: "Password reset email sent successfully",
    };
  }

}