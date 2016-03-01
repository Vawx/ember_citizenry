import Ember from 'ember';

export default Ember.Route.extend({
  model( params ) {
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
    },
});
