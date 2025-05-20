const devices = [
  {
    id: 'PBX00123',
    lastSyncTime: '2025-04-27T10:00:00Z',
    syncStatus: 'Success'
  },
  {
    id: 'PBX00124',
    lastSyncTime: '2025-04-27T09:00:00Z',
    syncStatus: 'Failed'
  },
  {
    id: 'PBX00125',
    lastSyncTime: '2025-04-26T17:00:00Z',
    syncStatus: 'Pending'
  },
  {
    id: 'PBX00126',
    lastSyncTime: '2025-04-26T14:30:00Z',
    syncStatus: 'Success'
  },
  {
    id: 'PBX00127',
    lastSyncTime: '2025-04-25T19:45:00Z',
    syncStatus: 'Failed'
  },
];


const errorLogs = [
  {
    deviceId: 'PBX00124',
    message: 'Connection Timeout',
    timestamp: '2025-04-27T09:00:00Z'
  },
  {
    deviceId: 'PBX00156',
    message: 'Storage Full',
    timestamp: '2025-04-26T11:30:00Z'
  },
  {
    deviceId: 'PBX00178',
    message: 'Unknown Sync Error',
    timestamp: '2025-04-25T08:15:00Z'
  },
  {
    deviceId: 'PBX00182',
    message: 'Authentication Failure',
    timestamp: '2025-04-24T16:45:00Z'
  },
  {
    deviceId: 'PBX00191',
    message: 'Server Not Reachable',
    timestamp: '2025-04-23T13:20:00Z'
  },
];

module.exports = {
  devices,
  errorLogs
};
