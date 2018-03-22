import { A } from '@ember/array';
import { assert } from '@ember/debug';
import { isEmpty } from '@ember/utils';
import BaseCell from 'ember-light-table/components/cells/base';
import layout from 'ember-light-table-cell-type-link/templates/components/light-table/cells/link'

/**
 * @class LinkCell
 * @extends LightTable.BaseCell
 */
export default class extends BaseCell.extend({ layout }) {
  willRender() {
    if (isEmpty(this.column.extra.type)) {
      assert ("Required ember-light-table-cell-type-link property 'extra.type' is not configured");
    }

    if (!A(['absolute', 'relative']).includes(this.column.extra.type)) {
      assert ("Unsupported value (" + this.column.extra.type + ") passed to ember-light-table-cell-type-link property 'extra.type' (only supports 'relative' or 'absolute')");
    }

    if ((this.column.extra.type === 'relative') && isEmpty(this.column.extra.route)) {
      assert ("ember-light-table-cell-type-link relative links require configuring the 'extra.route' property");
    }
  }
}
