import { AnimatePresence } from 'framer-motion';
import useSocket from '../hooks/useSocket';
import DeviceInfo from './DeviceInfo';
import SessionIndicator from './SessionIndicator';
import SuccessCard from './SuccessCard';
import RejectionCard from './RejectionCard';

const AttendanceDisplay = ({ deviceId, onChangeDevice }) => {
  const { connected, currentEvent } = useSocket(deviceId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col">
      {/* Top Bar */}
      <DeviceInfo 
        deviceId={deviceId} 
        connected={connected} 
        onChangeDevice={onChangeDevice} 
      />

      {/* Session Indicator */}
      <SessionIndicator session={currentEvent?.session} />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          {currentEvent ? (
            currentEvent.success ? (
              <SuccessCard key="success" event={currentEvent} />
            ) : (
              <RejectionCard key="rejection" event={currentEvent} />
            )
          ) : (
            <div key="idle" className="text-center text-white">
              <div className="mb-6">
                <svg className="w-32 h-32 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-2">Waiting for Fingerprint Scan</h2>
              <p className="text-xl opacity-75">Place your finger on the scanner</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AttendanceDisplay;
