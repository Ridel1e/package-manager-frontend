
export { isEmpty };

/**
 * Empty object check
 */
function isEmpty (value) {
  return value === undefined || value === '' || value === null || value !== value; 
}