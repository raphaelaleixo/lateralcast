import { Poppins, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import { getAllArticleSlugs, getArticleData } from "@/lib/api";
import Head from "next/head";
import { renderMetaTags } from "react-datocms/seo";
import Article from "@/components/Article/Article";
import Footer from "@/components/Footer/Footer";

export async function getStaticPaths() {
  const data = await getAllArticleSlugs();

  return {
    paths: data.allArticles.map((post) => `/materiais/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await getArticleData(params);
  return { props: { article: response?.article } };
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--poppins-font",
});
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--roboto-font",
});

export default function Home({ article }) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        {renderMetaTags(article.seometa)}
      </Head>
      <main className={`${poppins.variable} ${roboto.variable}`}>
        <Header
          isBlogPost
          data={{ pageTitle: article.title, subtitle: article.introduction }}
        ></Header>
        <Article content={article.content} />
        <Footer />
      </main>
    </>
  );
}
