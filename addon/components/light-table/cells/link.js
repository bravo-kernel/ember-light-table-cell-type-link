import { isEmpty } from '@ember/utils';
import BaseCell from 'ember-light-table/components/cells/base';
import layout from 'ember-light-table-cell-type-link/templates/components/light-table/cells/link'

/**
 * @class LinkCell
 * @extends LightTable.BaseCell
 */
export default class extends BaseCell.extend({ layout }) {
  willRender() {
    if (isEmpty(this.column.extra.route)) {
      throw new Error("ember-light-table cell type 'link' requires setting the 'extra.route' attribute");
    }
  }
}
