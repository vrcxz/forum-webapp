export function validateInput(inputString){
  const allowedPattern = /^[a-zA-Z0-9\s\-_]+$/;
  return allowedPattern.test(inputString);
}

export function sanitizeInput(inputString) {
  const allowedPattern = /^[a-zA-Z0-9\s\-_]+$/;
  const sanitizedString = inputString.replace(/[^a-zA-Z0-9\s\-_]+/g, '');
  return sanitizedString;
}