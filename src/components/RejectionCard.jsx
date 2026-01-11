import { motion } from 'framer-motion';

const RejectionCard = ({ event }) => {
  const { reason, message } = event;

  const errorMessages = {
    INVALID_DEVICE: {
      title: 'Invalid Device',
      help: 'Please check your device configuration'
    },
    INVALID_STUDENT: {
      title: 'Fingerprint Not Registered',
      help: 'Please register your fingerprint with admin'
    },
    OUTSIDE_WINDOW: {
      title: 'Outside Attendance Hours',
      help: 'Attendance can only be marked during session hours'
    },
    DUPLICATE: {
      title: 'Already Recorded',
      help: 'Your attendance was already marked recently'
    },
    SESSION_COMPLETED: {
      title: 'Session Attendance Complete',
      help: 'You have already marked attendance for this session'
    }
  };

  const errorInfo = errorMessages[reason] || {
    title: 'Attendance Failed',
    help: 'Please contact administrator'
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        rotate: [0, -2, 2, -2, 0]
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }}
      className="w-full max-w-2xl"
    >
      <div className="bg-gradient-to-br from-red-400 to-rose-500 rounded-3xl shadow-2xl p-8 text-white">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
            <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        {/* Error Title */}
        <h2 className="text-4xl font-bold text-center mb-4">{errorInfo.title}</h2>

        {/* Error Message from Backend */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
          <p className="text-xl text-center font-medium">{message}</p>
        </div>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-lg opacity-90">{errorInfo.help}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RejectionCard;
