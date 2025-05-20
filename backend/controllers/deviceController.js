const { devices } = require('../data/mockData');

exports.getAllDevices = (req, res) => {
  res.status(200).json({
    success: true,
    data: devices
  });
};

exports.getDeviceById = (req, res) => {
  const device = devices.find(d => d.id === req.params.id);
  
  if (!device) {
    return res.status(404).json({
      success: false,
      message: 'Device not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: device
  });
};

exports.syncDevice = (req, res) => {
  const device = devices.find(d => d.id === req.params.id);
  
  if (!device) {
    return res.status(404).json({
      success: false,
      message: 'Device not found'
    });
  }
  
  const syncResult = Math.random() > 0.3;
  
  device.lastSyncTime = new Date().toISOString();
  device.syncStatus = syncResult ? 'Success' : 'Failed';
  
  res.status(200).json({
    success: true,
    message: `Sync ${syncResult ? 'successful' : 'failed'} for device ${req.params.id}`,
    data: device
  });
};