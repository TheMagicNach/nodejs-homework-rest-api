const Contact = require("./contact");

const listContacts = async () => {
  try {
    return await Contact.find();
  } catch (error) {
    console.error("Error listing contacts:", error);
    throw new Error("Internal Server Error");
  }
};

const getContactById = async (contactId) => {
  try {
    return await Contact.findById(contactId);
  } catch (error) {
    console.error("Error getting contact by ID:", error);
    throw new Error("Internal Server Error");
  }
};

const addContact = async (name, email, phone) => {
  try {
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    return newContact;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw new Error("Internal Server Error");
  }
};

const updateContact = async (contactId, name, email, phone) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { name, email, phone },
      { new: true }
    );
    return contact;
  } catch (error) {
    console.error("Error updating contact:", error);
    throw new Error("Internal Server Error");
  }
};

const updateContactStatus = async (contactId, favorite) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    return contact;
  } catch (error) {
    console.error("Error updating contact:", error);
    throw new Error("Internal Server Error");
  }
};

const removeContact = async (contactId) => {
  try {
    const removedContact = await Contact.findByIdAndRemove(contactId);
    return removedContact;
  } catch (error) {
    console.error("Error removing contact:", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  updateContactStatus,
  removeContact,
};

