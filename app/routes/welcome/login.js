import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return new Ember.RSVP.Promise(function(resolve) {
      setTimeout(function() {
        resolve({ name: "Fulano " + params['user-id'] });
      }, 1000);
    });
  }
});
