import httpStatus from 'http-status-codes';

import * as userService from '../services/user.service'


export const getalluser = async (req, res, next) => {
  try {
    const data = await userService.getalluser();
    res.status(data.code).json(data)
  } catch (error) {
    res.status(data.code).json(data)
  }
}

export const signUp = async (req, res, next) => {
  try {
    const data = await userService.signUp(req.body);
    res.status(data.code).json(data)
  } catch (error) {
    res.status(httpStatus.BAD_GATEWAY).json(data)
  }
}


export const login = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    res.status(data.code).json(data)

  } catch (error) {
    res.status(data.code).json(data)
  }
}


export const forgetpassword = async (req, res, next) => {
  try {
    const data = await userService.forgetpassword(req.body);
    res.status(data.code).json(data);
  } catch (error) {
    res.status(data.code).json(data);
  }
}


export const resetpassword = async (req, res, next) => {
  try {
    const data = await userService.resetpassword(req.body);
    res.status(data.code).json(data);
  } catch (error) {
    res.status(data.code).json(data);
  }
}