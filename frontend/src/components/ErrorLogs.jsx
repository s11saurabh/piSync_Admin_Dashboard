import React from 'react';

const ErrorLogs = ({ errors }) => {
  
  console.log("Errors in ErrorLogs component:", errors);
  
  return (
    <div className="error-logs-container">
      <table className="error-logs-table">
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Error Message</th>
            <th>Last Attempt</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(errors) && errors.length > 0 ? (
            errors.map((error, index) => (
              <tr key={index}>
                <td>{error.deviceId}</td>
                <td>{error.message}</td>
                <td>{new Date(error.timestamp).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-errors">
                No errors to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        &lt;Pagination &gt;
      </div>
    </div>
  );
};

export default ErrorLogs;
