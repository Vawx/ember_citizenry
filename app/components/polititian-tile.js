import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getURL( ) {
      return this.get("president").urls[0];
    },
  }
});
