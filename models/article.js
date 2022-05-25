const db = require('../db');

async function createArticle(data) {
  return db.article.create({ data });
}

async function getAllArticles() {
  return db.article.findMany();
}

module.exports = {
  createArticle,
  getAllArticles,
  deleteMany: db.article.deleteMany,
};
