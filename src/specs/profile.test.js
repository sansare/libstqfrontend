// мы используем profile из specs для того, чтобы дополнительно протестить,
// что specs экспортит корректный набор спек
import { specs } from '../index';
import notEmpty from '../rules/notEmpty';

// данные тесты являются актуальным набором правил валидации для обеих платформ (фронт и мобила)
describe('specs/profile', () => {
  it('should has correct rules', () => {
    expect(specs.profile.firstName).toEqual([[notEmpty, 'Should not be empty']]);
  });
});
