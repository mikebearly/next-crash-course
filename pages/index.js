import { server } from '../config';
import ArticleList from '../components/ArticleList';
import Image from 'next/image';

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <ArticleList articles={articles} />
      <h1>Welcome to Next</h1>
    </div>
  );
}
//getStaticProps - get data in the build time
//getServerSideProps - fetch data on every request
//getStaticPaths - Dynamically generate paths based on data fetching.

/*
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
*/
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
