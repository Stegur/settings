/* eslint-disable no-console */
// TODO: write your code here
import Settings from './Settings';

const settings = new Settings();

console.log(settings.defaultSettings);

settings.changeSettings('music', 'rock');
settings.changeSettings('theme', 'light');
settings.changeSettings('dificulty', 'hard');

console.log(settings.usersSettings);

console.log(settings.settings);
