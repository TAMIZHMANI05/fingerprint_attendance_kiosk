import { useState } from 'react';

const DeviceSelector = ({ onDeviceSelect }) => {
  const [deviceId, setDeviceId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedId = deviceId.trim().toUpperCase();
    if (trimmedId) {
      onDeviceSelect(trimmedId);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Attendance Kiosk
          </h1>
          <p className="text-gray-600">Enter your device ID to connect</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Device ID Input */}
          <div>
            <label htmlFor="device-id" className="block text-sm font-medium text-gray-700 mb-2">
              Device ID
            </label>
            <input
              id="device-id"
              type="text"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value.toUpperCase())}
              onKeyPress={handleKeyPress}
              placeholder="ESP32_001"
              autoFocus
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors font-mono uppercase text-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!deviceId.trim()}
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 text-lg"
          >
            Connect to Device
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeviceSelector;
