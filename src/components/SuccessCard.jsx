import { motion } from 'framer-motion';

const SuccessCard = ({ event }) => {
  const { student, action, session, timestamp } = event;

  return (
    <motion.div
      initial={{ y: 100, scale: 0.8, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="w-full max-w-2xl"
    >
      <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl shadow-2xl p-8 text-white">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Student Name */}
        <h2 className="text-4xl font-bold text-center mb-2">{student.name}</h2>
        
        {/* Student ID */}
        <p className="text-center text-2xl font-mono mb-6 opacity-90">{student.studentId}</p>

        {/* Student Details */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm opacity-75">Department</p>
              <p className="text-lg font-semibold">{student.department}</p>
            </div>
            <div>
              <p className="text-sm opacity-75">Year</p>
              <p className="text-lg font-semibold">{student.year}</p>
            </div>
            <div>
              <p className="text-sm opacity-75">Section</p>
              <p className="text-lg font-semibold">{student.section}</p>
            </div>
          </div>
        </div>

        {/* Action and Session Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`px-6 py-2 rounded-full font-bold text-lg ${
              action === 'IN' ? 'bg-blue-500' : 'bg-purple-500'
            }`}>
              {action === 'IN' ? '→ IN' : '← OUT'}
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm opacity-75 capitalize">{session} Session</p>
            <p className="text-2xl font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessCard;
