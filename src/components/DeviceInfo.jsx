const DeviceInfo = ({ deviceId, connected, onChangeDevice }) => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left side - Device ID and Status */}
      <div className="flex items-center gap-4">
        <div>
          <span className="text-sm text-gray-500">Device ID:</span>
          <span className="ml-2 text-lg font-bold text-gray-800">{deviceId}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className={`text-sm font-medium ${connected ? 'text-green-600' : 'text-red-600'}`}>
            {connected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>

      {/* Right side - Change Device Button */}
      <button
        onClick={onChangeDevice}
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        Change Device
      </button>
    </div>
  );
};

export default DeviceInfo;
