import log from 'loglevel';

// Set the default logging level (info, error, debug, etc.)
log.setLevel('info');

// Optional: Custom log output (similar to winston transports)
const originalFactory = log.methodFactory;
log.methodFactory = function (methodName, level, loggerName) {
  const rawMethod = originalFactory(methodName, level, loggerName);
  return function (...args) {
    const timestamp = new Date().toISOString();
    rawMethod(`[${timestamp}] ${methodName.toUpperCase()}:`, ...args);
  };
};
log.setLevel(log.getLevel()); // Apply the custom factory

export default log;
