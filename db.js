const authors = [
  { id: 1, name: "Bob Doe" },
  { id: 2, name: "May Lee" },
  { id: 3, name: "Peter Meyer" },
  { id: 4, name: "Jane Smith" },
];

async function getAuthorById(id) {
  return authors.find((author) => author.id === id);
}

module.exports = {
  getAuthorById,
};
