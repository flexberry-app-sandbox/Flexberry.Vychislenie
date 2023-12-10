import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vychislenie-зверь-l');
  this.route('i-i-s-vychislenie-зверь-e',
  { path: 'i-i-s-vychislenie-зверь-e/:id' });
  this.route('i-i-s-vychislenie-зверь-e.new',
  { path: 'i-i-s-vychislenie-зверь-e/new' });
  this.route('i-i-s-vychislenie-лес-l');
  this.route('i-i-s-vychislenie-лес-e',
  { path: 'i-i-s-vychislenie-лес-e/:id' });
  this.route('i-i-s-vychislenie-лес-e.new',
  { path: 'i-i-s-vychislenie-лес-e/new' });
});

export default Router;
