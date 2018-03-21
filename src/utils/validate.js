import spected from 'spected';
import { isEmpty } from 'ramda';

import extractErrors from './extractErrors';

const validate = (specs, obj) => {
  const result = spected(specs, obj);
  const errors = extractErrors(result);
  return {
    isValid: isEmpty(errors),
    errors: errors && !isEmpty(errors) ? errors : undefined,
  };
};

export default validate;
