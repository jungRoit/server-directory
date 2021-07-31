import dotenv from 'dotenv';
dotenv.config();

export const genericErrorHandler = (Error, req, res, next) => {
  let stack = {};
  let error = {};
  if (Error.stack) {
    stack = Error.stack.split('\n');
    stack.splice(0, 1);
  }
  if (Error.message && Error.code) {
    error = {
      message: Error.message,
      data: {
        details: Error.details,
      }
    };
  } else {
    error = {
      message: 'Internal Server Error',
      data: {
        details: Error.toString(),
      }
    };
  }

  if (process.env.ENV === 'dev') {
    error['trace'] = stack;
  }

  const code = Error.code ? Error.code : 500;
  res.status(code).json(error);
};
