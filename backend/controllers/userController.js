const catchAsync = require('../utils/catchAsync');

exports.getUsers = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'This message is came from the API',
  });
});
