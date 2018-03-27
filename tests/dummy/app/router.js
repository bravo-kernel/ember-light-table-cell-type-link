import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // demo
  this.route('user', { path: '/user/:user_id' });

  // ember-addon-docs
  this.route('docs', function() {
    this.route('usage');
    this.route('api', function() {
      this.route('item', { path: '/*path' });
    });
  });

  // 404
  this.route('not-found', { path: '/*path' });
});

export default Router;
