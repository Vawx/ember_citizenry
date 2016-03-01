import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('polititian-result', {path: '/polititian-result/:zip'});
});

export default Router;
