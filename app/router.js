import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('polititian-result', {path: '/polititian-result/:zip'});
  this.route('house-result', {path: '/house-result/:zip'});
  this.route('bills-result', {path: '/bills-result/:zip'});
});

export default Router;
