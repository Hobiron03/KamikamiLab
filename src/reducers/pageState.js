import {
  CHANGE_PAGE_STATE_HOME,
  CHANGE_PAGE_STATE_WORKS,
  CHANGE_PAGE_STATE_CONTACT
} from '../actions';

const pageState = (state = [true, false, false], action) => {
  switch (action.type) {
    case CHANGE_PAGE_STATE_HOME:
      return [true, false, false];
    case CHANGE_PAGE_STATE_WORKS:
      return [false, true, false];
    case CHANGE_PAGE_STATE_CONTACT:
      return [false, false, true];
    default:
      return [true, false, false];
  }
};

export default pageState;
