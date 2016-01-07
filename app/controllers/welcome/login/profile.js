import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    controllerAction: function(propName, value) {
      this.set('model.' + propName, value);
      this.transitionToRoute('welcome');
    },
  }
});
