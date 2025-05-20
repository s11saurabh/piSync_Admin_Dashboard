import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DeviceTable from './DeviceTable';
import ErrorLogs from './ErrorLogs';
import { getAllDevices, getAllErrors, syncDevice } from '../services/api';
import { logout } from '../services/auth';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('devices');
  const [devices, setDevices] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const devicesData = await getAllDevices();
      setDevices(devicesData.data || []);
      
      const errorsData = await getAllErrors();
      console.log("Fetched error data:", errorsData);
      
      if (errorsData && errorsData.data) {
        setErrors(errorsData.data);
      } else {
        console.error("No error data received");
        setErrors([]);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setErrors([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async (deviceId) => {
    try {
      await syncDevice(deviceId);
      fetchData();
    } catch (err) {
      console.error('Error syncing device:', err);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <Navbar />
      
      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'devices' ? 'active' : ''} 
          onClick={() => handleTabChange('devices')}
        >
          Device Management
        </button>
        <button 
          className={activeTab === 'errors' ? 'active' : ''} 
          onClick={() => handleTabChange('errors')}
        >
          Recent Errors
        </button>
        
        <div className="tab-actions">
          <button onClick={fetchData} className="refresh-btn">
            Refresh icon
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout icon
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="loading">Loading data...</div>
      ) : (
        <>
          {activeTab === 'devices' && (
            <DeviceTable devices={devices} onSync={handleSync} />
          )}
          
          {activeTab === 'errors' && (
            <ErrorLogs errors={errors} />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
