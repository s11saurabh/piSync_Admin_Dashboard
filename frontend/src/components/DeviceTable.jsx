import React from 'react';

const DeviceTable = ({ devices, onSync }) => {
  return (
    <div className="device-table-container">
      <table className="device-table">
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Last Sync Time</th>
            <th>Sync Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{new Date(device.lastSyncTime).toLocaleString()}</td>
              <td className={`status-${device.syncStatus.toLowerCase()}`}>
                {device.syncStatus === 'Success' && '✓ '}
                {device.syncStatus === 'Failed' && '✗ '}
                {device.syncStatus === 'Pending' && '⌛ '}
                {device.syncStatus}
              </td>
              <td>
                <button 
                  className="sync-now-btn"
                  onClick={() => onSync(device.id)}
                >
                  [Sync Now]
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        &lt;Pagination &gt;
      </div>
    </div>
  );
};

export default DeviceTable;