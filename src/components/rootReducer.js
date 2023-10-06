import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import authReducer from '../auth/authSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
