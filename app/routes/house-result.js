import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if(params.zip == undefined) {
      params.zip = 10000;
    }
    var url = "http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7";
    return Ember.$.getJSON( url ).then(function(response) {
      var house = [];
      for( var i = 0; i < response.results.length; i++ ){
        house.push(response.results[i]);
      }
      return house;
    });
  }
});
