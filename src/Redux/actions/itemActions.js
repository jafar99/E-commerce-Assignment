import {
  SET_TSHIRT_STATE,
  SET_JEANS_STATE,
  SET_MOBILE_STATE,
  SET_EARPHONES_STATE,
  SET_MAC_STATE,
} from "./actionTypes";

// Action creators
export const setTshirtState = (data) => {
  return {
    type: SET_TSHIRT_STATE,
    payload: data,
  };
};

export const setJeansState = (data) => {
  return {
    type: SET_JEANS_STATE,
    payload: data,
  };
};

export const setMobileState = (data) => {
  return {
    type: SET_MOBILE_STATE,
    payload: data,
  };
};

export const setEarphonesState = (data) => {
  return {
    type: SET_EARPHONES_STATE,
    payload: data,
  };
};

export const setMacState = (data) => {
  return {
    type: SET_MAC_STATE,
    payload: data,
  };
};
