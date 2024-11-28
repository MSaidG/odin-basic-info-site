const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const asyncHandler = require("express-async-handler");

const getAuthorById = asyncHandler( async function(req, res) {
  const id = Number(req.params.id);
  const author = await db.getAuthorById(id);

  if (!author) {
    throw new CustomNotFoundError(`Author with id ${id} not found`);
  }

  res.status(200).send(`Author: ${author.name}`);
  res.end();
});

module.exports = {
  getAuthorById,
};