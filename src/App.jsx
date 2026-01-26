import { useState, useEffect } from 'react';
import DeviceSelector from './components/DeviceSelector';
import AttendanceDisplay from './components/AttendanceDisplay';

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
        <AttendanceDisplay 
          deviceId={selectedDevice} 
          onChangeDevice={handleDeviceChange} 
        />
      )}
    </div>
  );
};

export default App;