import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = (deviceId) => {
  const [connected, setConnected] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const socketRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!deviceId) return;

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    // Create Socket.IO connection with API key authentication
    const socket = io(apiUrl, {
      auth: {
        'x-api-key': apiKey
      },
      transports: ['websocket', 'polling']
    });

    socketRef.current = socket;

    // Connection event handlers
    socket.on('connect', () => {
      setConnected(true);
      
      // Join device-specific room
      socket.emit('join-device-room', deviceId );
    });

    socket.on('room-joined', (data) => {
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      setConnected(false);
    });

    // Attendance event handler
    socket.on('attendance:event', (event) => {
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set the current event
      setCurrentEvent(event);

      // Auto-dismiss after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setCurrentEvent(null);
      }, 5000);
    });

    // Cleanup on unmount or deviceId change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      socket.disconnect();
    };
  }, [deviceId]);

  return {
    socket: socketRef.current,
    connected,
    currentEvent
  };
};

export default useSocket;
