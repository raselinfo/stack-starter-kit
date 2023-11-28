import config from 'config';

describe('Demo', () => {
  console.log(config.get('name'));
  console.log(config.get('name'));
  it('should check the value ', () => {
    expect('rasel').toBe('rasel');
  });
});
