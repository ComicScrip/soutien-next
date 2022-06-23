import { createArticle, getAllArticles } from '../../models/article';

export default async function handler(req, res) {
  if (req.method === 'GET') res.send(await getAllArticles());
  else if (req.method === 'POST') res.send(await createArticle(req.body));
  else res.status(405).send();
}
