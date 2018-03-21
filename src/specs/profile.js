import notEmpty from '../rules/notEmpty';

export default {
  firstName: [[notEmpty, 'Should not be empty']],
  lastName: [[notEmpty, 'Should not be empty']],
  middleName: [[notEmpty, 'Should not be empty']],
};
