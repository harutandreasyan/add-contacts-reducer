import { IAction, IState, IContact, Types } from "../types";

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Types.SET_CONTACTS:
      return { ...state, contacts: action.payload as IContact[] };
    case Types.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload as IContact] };
    case Types.DELETE_CONTACT:
      return { ...state, contacts: state.contacts.filter((c) => c.id !== action.payload) };
    default:
      return state;
  }
};
