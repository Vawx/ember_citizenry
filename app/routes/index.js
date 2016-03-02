import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      zipLookup( params ) {
        switch(params.selection) {
          case undefined:
          case 1:
          this.transitionTo('polititian-result', params.zip);
          break;
          case 2:
          this.transitionTo('house-result', params.zip);
          break;
          case 3:
          this.transitionTo('bills-result', params.zip);
          break;
        }
      }
    }
});
