// BEGIN-SNIPPET demo-table.js
import { computed } from '@ember/object';
import Component from '@ember/component';
import Table from 'ember-light-table';

export default Component.extend({
  model: null,
  selectable: false,

  columns: computed(function() {
    return [{
      label: 'ID',
      valuePath: 'id',
      sortable: false,
      width: '4%'
    }, {
      label: 'Relative links',
      valuePath: 'firstName',
      sortable: false,
       // ember-light-table-cell-type-link
      cellType: 'link',
      extra: {
        type: 'relative',
        route: 'user', // route as used in your app, row-id passed as :id
        classNames: "docs-viewer__nav-link"
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
      label: 'Absolute links',
      valuePath: 'website',
      sortable: false,
      cellType: 'link',
      extra: {
        type: 'absolute', // uses cell value as `href`
        classNames: "docs-viewer__nav-link"
      }
    }];
  }),

  table: computed('model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
// END-SNIPPET
