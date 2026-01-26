const SessionIndicator = ({ session }) => {
  // Backend provides session info in the event, but this shows current time context
  // Session data from backend event will be: { session: "morning" | "afternoon", timestamp: "HH:mm" }
  
  if (!session) {
    return (
      <div className="bg-gray-400 text-white py-3 px-6 text-center">
        <div className="font-bold text-xl uppercase">No Active Session</div>
        <div className="text-sm mt-1">Waiting for attendance event...</div>
      </div>
    );
  }

  const sessionColors = {
    morning: 'bg-gradient-to-r from-amber-400 to-yellow-500',
    afternoon: 'bg-gradient-to-r from-blue-400 to-blue-600'
  };

  const sessionWindows = {
    morning: '09:00 - 12:30',
    afternoon: '13:30 - 16:30'
  };

  const bgColor = sessionColors[session] || 'bg-gray-400';

  return (
    <div className={`${bgColor} text-white py-3 px-6 text-center`}>
      <div className="font-bold text-xl uppercase">{session} Session</div>
      <div className="text-sm mt-1">{sessionWindows[session]}</div>
    </div>
  );
};

export default SessionIndicator;
