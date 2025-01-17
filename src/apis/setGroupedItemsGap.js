/**
 * @ignore
 * Sets the gap of Grouped Items
 * @method UI.setGroupedItemsGap
 * @example
 * WebViewer(...)
  .then(function (instance) {
    const newHeader = new instance.UI.Components.ModularHeader({
      dataElement: 'top-header',
      location: 'top'
    });

    // Setting the gap of all Grouped Items
    instance.UI.setGroupedItemsGap(20);

    // Setting the gap of all Grouped Items with a specific data element
    instance.UI.setGroupedItemsGap(30, {
      groupedItem: 'group1'
    });

    // Setting the gap of Grouped Items with a specific data element in a specific header
    instance.UI.setGroupedItemsGap(40, {
      groupedItem: 'group1',
      header: 'top-header'
    });
 */
import actions from 'actions';
import { isGapValid } from 'components/ModularComponents/Helpers/validation-helper';

export default (store) => (gap, selectors) => {
  if (isGapValid(gap)) {
    store.dispatch(actions.setGroupedItemsProperty('gap', gap, selectors?.groupedItem, selectors?.header));
  }
};