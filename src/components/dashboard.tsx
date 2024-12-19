import { ContactList } from "./contact-list";
import { AddContactForm } from "./add-contact-form";

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-indigo-400 mb-4">Add Contact</h2>
                    <AddContactForm />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-indigo-400 mb-4">Contact List</h2>
                    <ContactList />
                </div>
            </div>
        </div>
    );
};
