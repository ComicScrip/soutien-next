import { getAllArticles } from '../../models/article';

export default async function handler(req, res) {
  res.send(await getAllArticles());
}
