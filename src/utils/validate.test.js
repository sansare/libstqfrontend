import { validate } from '../index';
import notEmpty from '../rules/notEmpty';

const objInvalid = {
  name: '',
  surname: 'a',
};

const objValid = {
  name: 'a',
  surname: 'a',
};

const spec = {
  name: [
    [notEmpty, 'Should not be empty'],
  ],
  surname: [
    [notEmpty, 'Should not be empty'],
  ],
};

describe('validate', () => {
  it('should return errors array when object is not valid', () => {
    expect(validate(spec, objInvalid)).toMatchObject({
      errors: {
        name: ['Should not be empty'],
      },
      isValid: false,
    });
  });
  it('should return `{ isValid: true }` when object is valid', () => {
    const validationObj = validate(spec, objValid);
    expect(validationObj).toMatchObject({ isValid: true });
    expect(validationObj.errors).toBeUndefined();
  });
});
