import httpStatus from 'http-status-codes';

import * as userService from '../services/user.service'


export const getalluser = async (req, res, next) => {
  try {
    const data = await userService.getalluser();
    res.status(httpStatus.ACCEPTED).json({
      code: httpStatus.ACCEPTED,
      data: data
    })
  } catch (error) {
    res.status(httpStatus.BAD_GATEWAY).json({
      code: httpStatus.BAD_REQUEST,
      message: `the error is : ${error} `
    })
  }
}

export const signUp = async (req, res, next) => {
  try {
    const data = await userService.signUp(req.body);
    res.status(httpStatus.ACCEPTED).json({
      code: httpStatus.ACCEPTED,
      data: data
    })
  } catch (error) {
    res.status(httpStatus.BAD_GATEWAY).json({
      code: httpStatus.BAD_REQUEST,
      message: `the error is : ${error} `
    })
  }
}


export const login = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    res.status(httpStatus.ACCEPTED).json({
      code: httpStatus.ACCEPTED,
      data: data,
      message: "succefully login"
    })

  } catch (error) {
    res.status(httpStatus.BAD_GATEWAY).json({
      code: httpStatus.BAD_REQUEST,
      message: `the error is : ${error} `
    })
  }
}