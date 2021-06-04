import proxyUrl from '../../util/proxy';
import { EMPLOYEE_LIST_LOADING, EMPLOYEE_LIST_LOADED } from '../types';
import axios from 'axios';

export const getEmployeeData = () => (dispatch) => {
  dispatch({ type: EMPLOYEE_LIST_LOADING });
  axios
    .get(`${proxyUrl}/employees`)
    .then((res) => {
      dispatch({
        type: EMPLOYEE_LIST_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
