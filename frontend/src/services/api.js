const API_URL = 'http://localhost:5001/api';

export const getAllDevices = async () => {
  const response = await fetch(`${API_URL}/devices`);
  if (!response.ok) {
    throw new Error('Failed to fetch devices');
  }
  return response.json();
};

export const getDeviceById = async (id) => {
  const response = await fetch(`${API_URL}/devices/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch device ${id}`);
  }
  return response.json();
};

export const syncDevice = async (id) => {
  const response = await fetch(`${API_URL}/devices/${id}/sync`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to sync device ${id}`);
  }
  return response.json();
};

export const getAllErrors = async () => {
  const response = await fetch(`${API_URL}/errors`);
  if (!response.ok) {
    throw new Error('Failed to fetch errors');
  }
  return response.json();
};

export const getRecentErrors = async () => {
  const response = await fetch(`${API_URL}/errors/recent`);
  if (!response.ok) {
    throw new Error('Failed to fetch recent errors');
  }
  return response.json();
};

export const getDeviceErrors = async (id) => {
  const response = await fetch(`${API_URL}/devices/${id}/errors`);
  if (!response.ok) {
    throw new Error(`Failed to fetch errors for device ${id}`);
  }
  return response.json();
};