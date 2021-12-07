import { DISPLAY } from "../action-types/action-types-Contact";

const initialState = {
  contacts: [],
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISPLAY:
      return {
        ...state,
        contacts: payload.contacts
      };

    default:
      return state;
  }
};
