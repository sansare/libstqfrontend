import extractErrors from './extractErrors';

describe('extractErrors', () => {
  it('should correct extract errors', () => {
    const input = {
      profile: {
        name: true,
        surname: ['error msg'],
      },
      settings: {
        keys: {
          first: true,
          second: true,
        },
        colors: {
          main: true,
          secondary: ['Can not be the same as main'],
        },
        size: true,
      },
      id: true,
      type: ['some error msg'],
    };
    expect(extractErrors(input)).toMatchObject({
      profile: {
        surname: ['error msg'],
      },
      settings: {
        colors: {
          secondary: ['Can not be the same as main'],
        },
      },
      type: ['some error msg'],
    });
  });
});
