import Ember from 'ember';

export default Ember.Route.extend({
  model( params ) {
    if(params != undefined) {
      var url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAa32Ptz48sjzgP0VGoXcKuqLTf0rjLh1c&address=' + params.zip;
      return Ember.$.getJSON( url ).then(function(response) {
          var officials = [];
          for( var i = 0; i < response.officials.length; i++ ) {
            if(response.officials[ i ].name.length > 0) {
              officials.push(response.officials[i]);
            }
          }
          return officials;
        });
      }
    },
    actions: {
      zipLookup( params ) {
        switch(params.selection) {
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
      },
    }
});
