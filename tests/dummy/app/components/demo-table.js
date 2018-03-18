import { computed } from '@ember/object';
import Component from '@ember/component';
import Table from 'ember-light-table';

// note: template MUST be in /app or the dummy crashes

export default Component.extend({
  model: null,

  columns: computed(function() {
    return [{
      label: 'First Name',
      valuePath: 'firstName',
      sortable: false,
      // changing cellType to componentType the td no longer receives the data (unexpectedly according to docs).
      // difference explained here https://github.com/offirgolan/ember-light-table/issues/536:
      // componentType is nested within a TD, cellType is the component that generates the TD
      cellType: 'link',
      extra: {
        route: 'user'
      }
    }, {
      label: 'Last Name',
      valuePath: 'lastName',
      sortable: false
    }, {
      label: 'City',
      valuePath: 'city',
      sortable: false
    }, {
      label: 'Website',
      valuePath: 'website',
      sortable: false
    }];
  }),

  table: computed('model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
