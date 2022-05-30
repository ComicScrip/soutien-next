import Layout from '../../components/Layout';
import { getAllArticles, findArticleById } from '../../models/article';

export default function ArticleDetails({ article }) {
  return (
    <Layout pageTitle={article.title}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = await getAllArticles();
  return {
    paths: articles.map((a) => ({ params: { id: a.id.toString() } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const article = await findArticleById(context.params.id);
  return {
    props: {
      article,
    },
  };
}
