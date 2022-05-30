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

async function findArticleById(id) {
  return db.article.findUnique({ where: { id: parseInt(id, 10) } });
}

module.exports = {
  deleteAllArticles,
  createArticle,
  getAllArticles,
  findArticleById,
};
