import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup( ) {
      var params = {
        zip: this.get('zipcode'),
        selection: this.get('buttonGroupValue'),
      };
      this.sendAction('zipLookup', params);
    }
  }
});
