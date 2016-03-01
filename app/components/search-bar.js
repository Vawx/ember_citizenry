import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup( ) {
      var zip = this.get('zipcode');
      this.sendAction('zipLookup', zip);
    }
  }
});
