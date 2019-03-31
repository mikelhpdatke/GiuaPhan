import { fromJS } from 'immutable';
import googleTranslateReducer from '../reducer';

describe('googleTranslateReducer', () => {
  it('returns the initial state', () => {
    expect(googleTranslateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
