import ArticleForm from '../../../components/ArticleForm';
import ArticleList from '../../../components/ArticleList';
import Layout from '../../../components/Layout';

export default function ArticleEditionPage() {
  return (
    <Layout>
      <ArticleList />
      <ArticleForm />
    </Layout>
  );
}
