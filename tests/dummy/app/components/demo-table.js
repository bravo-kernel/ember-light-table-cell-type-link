// BEGIN-SNIPPET demo-table.js
import { computed } from '@ember/object';
import Component from '@ember/component';
import Table from 'ember-light-table';

export default Component.extend({
  model: null,

  columns: computed(function() {
    return [{
      label: 'First Name',
      valuePath: 'firstName',
      cellType: 'link', // ember-light-table-cell-type-link
      extra: {
        route: 'user',
        classNames: "docs-viewer__nav-link"
      }
    }, {
      label: 'Last Name',
      valuePath: 'lastName',
    }, {
      label: 'City',
      valuePath: 'city',
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
// END-SNIPPET
