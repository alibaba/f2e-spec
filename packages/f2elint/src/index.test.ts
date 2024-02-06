import { f2elint } from '.';

describe('f2elint', () => {
  describe('normal', async () => {
    expect(f2elint('Foo', 'Bar')).toBe('Foo Bar');
  });

  describe('lastName upper case', async () => {
    expect(f2elint('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
