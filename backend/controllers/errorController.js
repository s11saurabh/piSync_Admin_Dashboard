const { errorLogs } = require('../data/mockData');

exports.getAllErrors = (req, res) => {
  console.log("Sending error logs:", errorLogs);
  res.status(200).json({
    success: true,
    data: errorLogs
  });
};

exports.getDeviceErrors = (req, res) => {
  const deviceErrors = errorLogs.filter(error => error.deviceId === req.params.id);
  
  res.status(200).json({
    success: true,
    data: deviceErrors
  });
};

exports.getRecentErrors = (req, res) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  const recentErrors = errorLogs;
  
  res.status(200).json({
    success: true,
    data: recentErrors
  });
};