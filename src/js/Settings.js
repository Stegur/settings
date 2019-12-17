/* eslint-disable no-console */
export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.usersSettings = new Map();
  }

  changeSettings(key, value) {
    if (this.defaultSettings.has(key)) {
      this.usersSettings.set(key, value);
      console.log(`Настройка ${key} => ${value} установлена`);
    } else {
      throw new Error('Настройки не существует');
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.usersSettings]);
  }
}
