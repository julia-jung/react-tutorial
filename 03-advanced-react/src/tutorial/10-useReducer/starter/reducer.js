import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

const reducer = (state, action) => {
  // return value will be the new state
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return { ...state, people: data };
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter(({ id }) => id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
