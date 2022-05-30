const db = require('../db');

async function deleteAllArticles() {
  return db.article.deleteMany();
}

async function createArticle(data) {
  return db.article.create({ data });
}

async function getAllArticles() {
  return db.article.findMany();
}

module.exports = {
  deleteAllArticles,
  createArticle,
  getAllArticles,
};
