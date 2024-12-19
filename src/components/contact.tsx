import { useContext } from "react";
import { IContact, Types } from "../types";
import { ContactContext } from "../context/context";
import { deleteContact } from "../context/api";

interface ContactProps {
  contact: IContact;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const context = useContext(ContactContext);
  if (!context) throw new Error("Out of Provider!");

  const { dispatch } = context;

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    dispatch({ type: Types.DELETE_CONTACT, payload: id });
  };

  return (
    <div className="bg-gray-100 text-black p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
      <div>
        <h3 className="font-semibold text-lg">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.phone}</p>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition shadow-sm"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};
