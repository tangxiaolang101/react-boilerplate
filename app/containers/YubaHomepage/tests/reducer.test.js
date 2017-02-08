
import { fromJS } from 'immutable';
import yubaHomepageReducer from '../reducer';

describe('yubaHomepageReducer', () => {
  it('returns the initial state', () => {
    expect(yubaHomepageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
