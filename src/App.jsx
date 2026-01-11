import { useState, useEffect } from 'react';
import DeviceSelector from './components/DeviceSelector';

const App = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  // Load saved device from localStorage on mount
  useEffect(() => {
    const savedDevice = localStorage.getItem('selectedDeviceId');
    if (savedDevice) {
      setSelectedDevice(savedDevice);
    }
  }, []);

  const handleDeviceSelect = (deviceId) => {
    localStorage.setItem('selectedDeviceId', deviceId);
    setSelectedDevice(deviceId);
  };

  const handleDeviceChange = () => {
    localStorage.removeItem('selectedDeviceId');
    setSelectedDevice(null);
  };

  return (
    <div className="min-h-screen">
      {!selectedDevice ? (
        <DeviceSelector onDeviceSelect={handleDeviceSelect} />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Connected to: {selectedDevice}</h1>
            <button
              onClick={handleDeviceChange}
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Change Device
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;