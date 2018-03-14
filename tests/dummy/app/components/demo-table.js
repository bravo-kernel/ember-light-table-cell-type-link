import { computed } from '@ember/object';
import Component from '@ember/component';
import Table from 'ember-light-table';

// note: template MUST be in /app or the dummy crashes

export default Component.extend({
  model: null,

  columns: computed(function() {
    return [{
      label: 'Title',
      valuePath: 'title',
      sortable: false,
      // changing cellType to componentType the td no longer receives the data (unexpectedly according to docs).
      // difference explained here https://github.com/offirgolan/ember-light-table/issues/536:
      // componentType is nested within a TD, cellType is the component that generates the TD
      cellType: 'link',
      extra: {
        route: 'rentals' // as found in the Ember Guide Tutorial
      }
    }, {
      label: 'Owner',
      valuePath: 'owner',
      sortable: false
    }, {
      label: 'City',
      valuePath: 'city',
      sortable: false
    }];
  }),

  table: computed('model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
