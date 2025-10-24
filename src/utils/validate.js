import { isEmpty } from 'ramda';

import extractErrors from './extractErrors';

// Custom spected replacement
const runValidation = (specs, obj) => {
  const result = {};
  
  Object.keys(specs).forEach(key => {
    const rules = specs[key];
    const value = obj[key];
    
    if (Array.isArray(rules)) {
      result[key] = [];
      rules.forEach(rule => {
        if (Array.isArray(rule)) {
          const [validator, errorMessage] = rule;
          if (typeof validator === 'function' && !validator(value)) {
            result[key].push(errorMessage);
          }
        }
      });
      
      // If no errors, mark as true (spected behavior)
      if (result[key].length === 0) {
        result[key] = true;
      }
    }
  });
  
  return result;
};

const validate = (specs, obj) => {
  const result = runValidation(specs, obj);
  const errors = extractErrors(result);
  return {
    isValid: isEmpty(errors),
    errors: errors && !isEmpty(errors) ? errors : undefined,
  };
};

export default validate;
