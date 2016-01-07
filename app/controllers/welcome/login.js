import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {
    'user-id':  45,
    name: 'new model'
  },

  fullName: Ember.computed('model.name', 'model.lastName', function() {
    let model = this.get('model');
    return model.name + " " + model.lastName;
  }),
});
