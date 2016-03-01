import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = "http://congress.api.sunlightfoundation.com/bills?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7";
    return Ember.$.getJSON( url ).then(function(response) {
      console.log(response);
      var bills = [];
      for( var i = 0; i < response.results.length; i++ ){
        bills.push(response.results[i]);
      }
      return bills;
    });
  }
});
