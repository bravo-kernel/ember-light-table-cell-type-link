import { computed } from '@ember/object';
import Table from 'ember-light-table';

export default Ember.Component.extend({
  model: null,

  columns: computed(function() {
    return [{
      label: 'Title',
      valuePath: 'title',
      cellType: 'link',
      extra: {
        modelName: 'project'
      }
    }, {
      label: 'Owner',
      valuePath: 'owner'
    }, {
      label: 'City',
      valuePath: 'city'
    }];
  }),

  table: computed('model', function() {
   return new Table(this.get('columns'), this.get('model'));
  })
});
