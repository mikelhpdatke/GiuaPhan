import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the googleTranslate state domain
 */

const selectGoogleTranslateDomain = state =>
  state.get('googleTranslate', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoogleTranslate
 */

const makeSelectGoogleTranslate = () =>
  createSelector(selectGoogleTranslateDomain, substate => substate.toJS());

export default makeSelectGoogleTranslate;
export { selectGoogleTranslateDomain };
