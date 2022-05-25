import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles').then((res) => setArticles(res.data));
  }, []);
  return (
    <Layout pageTitle='List of articles'>
      <h1>Articles</h1>
      {articles.map((a) => (
        <p key={a.id}>{a.title}</p>
      ))}
    </Layout>
  );
}
