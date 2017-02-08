import { createSelector } from 'reselect';

/**
 * Direct selector to the yubaHomepage state domain
 */
const selectYubaHomepageDomain = () => (state) => state.get('yubaHomepage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by YubaHomepage
 */

const makeSelectYubaHomepage = () => createSelector(
  selectYubaHomepageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectYubaHomepage;
export {
  selectYubaHomepageDomain,
};
