const ApiError = require('../utils/ApiError');

const notFound = (req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  let error = err;
  if (!error.isOperational) {
    error = new ApiError(500, error.message || 'Internal server error');
  }
  if (error.name === 'ValidationError') {
    error = new ApiError(422, 'Validation failed', Object.values(error.errors).map((e) => e.message));
  }
  if (error.name === 'CastError') {
    error = new ApiError(400, `Invalid value for ${error.path}`);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    statusCode: error.statusCode || 500,
    message: error.message,
    details: error.details
  });
};

module.exports = { notFound, errorHandler };
