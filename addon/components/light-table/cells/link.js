import { isEmpty } from '@ember/utils';
import BaseCell from 'ember-light-table/components/cells/base';

/**
 * @class LinkCell
 * @extends LightTable.BaseCell
 */
export default class extends BaseCell {
  willRender() {
    if (isEmpty(this.column.extra.route)) {
      throw new Error("ember-light-table cell type 'link' requires setting the 'extra.route' attribute");
    }
  }
}
