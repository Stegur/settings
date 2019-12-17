import Settings from '../Settings';


describe('Settings', () => {
  it('should set up user`s setting', () => {
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    expected.set('music', 'rock');

    const settings = new Settings();
    settings.changeSettings('music', 'rock');

    expect(settings.settings).toEqual(expected);
  });

  it('should set up all user`s setting', () => {
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    expected.set('music', 'rock');
    expected.set('theme', 'light');
    expected.set('difficulty', 'nightmare');

    const settings = new Settings();
    settings.changeSettings('music', 'rock');
    settings.changeSettings('theme', 'light');
    settings.changeSettings('difficulty', 'nightmare');

    expect(settings.settings).toEqual(expected);
  });

  it('should throw an Error for unknown setting', () => {
    const result = () => {
      const settings = new Settings();
      settings.changeSettings('sound', 'rock');
    };

    expect(result).toThrow(new Error('Настройки не существует'));
  });
});
