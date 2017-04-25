// makeSelectLocationState expects a plain JS object for the routing state
/*jshint esversion: 6 */
import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectIdeas = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('ideas').toJS()
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectLocationState,
  makeSelectIdeas,
};
