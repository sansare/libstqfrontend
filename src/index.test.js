import { specs, validate } from './index';

describe('package', () => {
  it('should has valid exports', () => {
    expect(specs).toBeDefined();
    expect(validate).toBeDefined();
  });
});
