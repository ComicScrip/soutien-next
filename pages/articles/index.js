import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('/api/articles').then((res) => setArticles(res.data));
  }, []);
  return (
    <Layout>
      <h1>List of articles</h1>
      {articles.map((a) => (
        <p key={a.id}>{a.title}</p>
      ))}
    </Layout>
  );
}
