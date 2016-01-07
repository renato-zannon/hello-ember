import Ember from 'ember';

export default Ember.GlimmerComponent.extend({
  didUpdateAttrs({ oldAttrs, newAttrs }) {
    alert(newAttrs.text);
  },

  actions: {
    changed: function(event) {
      let newValue = event.target.value;
      this.attrs['on-change'](newValue);
    },
  }
});
