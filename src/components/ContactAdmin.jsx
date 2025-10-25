import React, { useEffect, useState } from "react";

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions</h1>
      <div className="grid gap-6">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700"
          >
            <h2 className="text-xl font-semibold">{contact.name}</h2>
            <p className="text-sm text-gray-400">{contact.email}</p>
            <p className="mt-2">{contact.message}</p>
            <p className="text-xs text-gray-500 mt-3">
              {new Date(contact.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAdmin;
 