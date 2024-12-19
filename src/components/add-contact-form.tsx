import { useState, useContext } from "react";
import { ContactContext } from "../context/context";
import { addContact } from "../context/api";
import { Types } from "../types";

export const AddContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const context = useContext(ContactContext);
  if (!context) throw new Error("Out of Provider!");

  const { dispatch } = context;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newContact = { name, phone };
    const contact = await addContact(newContact);
    dispatch({ type: Types.ADD_CONTACT, payload: contact });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded shadow-md transition"
      >
        Add Contact
      </button>
    </form>
  );
};
