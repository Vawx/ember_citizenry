import Ember from 'ember';

export default Ember.Route.extend({
  model( ) {
    var url = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAa32Ptz48sjzgP0VGoXcKuqLTf0rjLh1c&address=1600%20Pennsylvania%20Ave%20NW.%20Washington%20DC';
    return Ember.$.getJSON( url ).then(function(response) {
        var officials = [];
        for( var i = 0; i < response.officials.length; i++ ) {
          console.log(response.officials[ i ] );
          if( response.officials[ i ].name == "Barack Obama" || response.officials[ i ].name == "Joseph R. Biden" ) {
            officials.push(response.officials[i]);
          }
        }
        return officials;
      });
    }
});
