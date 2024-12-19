import axios from "axios";
import { IContact } from "../types";

const Axios = axios.create({
  baseURL: "http://localhost:4000",
});

export const getAllContacts = async (): Promise<IContact[]> => {
  const response = await Axios.get("/contacts");
  return response.data;
};

export const addContact = async (contact: Omit<IContact, "id">): Promise<IContact> => {
  const response = await Axios.post("/contacts", contact);
  return response.data;
};

export const deleteContact = async (id: number): Promise<void> => {
  await Axios.delete(`/contacts/${id}`);
};
