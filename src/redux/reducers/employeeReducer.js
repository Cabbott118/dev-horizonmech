import { EMPLOYEE_LIST_LOADING, EMPLOYEE_LIST_LOADED } from '../types';

const initialState = {
  loading: false,
  employees: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEE_LIST_LOADED:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
