import { useEffect, useReducer } from "react";
import { Dashboard } from "./components/dashboard";
import { reducer } from "./context/reducer";
import { initialState } from "./context/state";
import { ContactContext } from "./context/context";
import { getAllContacts } from "./context/api";
import { Types } from "./types";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllContacts().then((response) => {
      dispatch({ type: Types.SET_CONTACTS, payload: response });
    });
  }, []);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </ContactContext.Provider>
  );
}
