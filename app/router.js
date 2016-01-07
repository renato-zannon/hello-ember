import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', { path: 'bem-vindo' }, function() {
    this.route('login', { path: '/:user-id' }, function() {
      this.route('profile',   { path: '/perfil' });
      this.route('address',   { path: '/enderecos/:address-id' });
    });
  });
});

export default Router;
