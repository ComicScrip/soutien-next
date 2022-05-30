import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllArticles } from '../../models/article';
import Link from 'next/link';

export default function ArticleList({ articles }) {
  return (
    <Layout pageTitle='List of articles'>
      <h1>Articles</h1>
      {articles.map((a) => (
        <p key={a.id}>
          <Link href={`/articles/${a.id}`}>
            <a>{a.title}</a>
          </Link>
        </p>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  return {
    props: {
      articles,
    },
  };
}
