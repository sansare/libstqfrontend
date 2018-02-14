export default input => {
  if (typeof input === 'string') {
    return input.trim().length > 0;
  } else if (Array.isArray(input)) {
    return input.length > 0;
  } else {
    return false;
  }
};