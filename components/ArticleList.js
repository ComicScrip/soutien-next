import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export default function ArticleList() {
  const { data: articles, isFetching } = useQuery('articles', () =>
    axios.get('/api/articles').then((res) => res.data)
  );

  return (
    <>
      <h1>List of articles</h1>
      {!articles ? (
        <p>Loading...</p>
      ) : (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          {articles.map((a) => (
            <p key={a.id}>{a.title}</p>
          ))}
        </div>
      )}
    </>
  );
}
