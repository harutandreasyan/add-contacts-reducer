import { useContext } from "react";
import { ContactContext } from "../context/context";
import { Contact } from "./contact";

export const ContactList = () => {
  const context = useContext(ContactContext);
  if (!context) throw new Error("Out of Provider!");

  const { state } = context;

  return (
    <div>
      {state.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
