import { Inter } from "next/font/google";
import { getAllQuestionSlugs, getQuestionData } from "@/lib/api";
import Head from "next/head";
import { findColorByIndex } from "@/lib/findColorByIndex";
import DetailView from "@/components/DetailView";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import Button from "@/components/Button";
import Tips from "@/components/Tips";
import ImageZoom from "@/components/ImageZoom";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--inter-font",
});

export async function getStaticPaths() {
  const data = await getAllQuestionSlugs();

  return {
    paths: data.allQuestions.map((post) => `/question/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await getQuestionData(params);
  return { props: { question: response?.question } };
}

export default function Question({ question }) {
  const color = findColorByIndex(question.position - 1);

  return (
    <Layout>
      <Head>
        <title>Lateral Cast</title>
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#242B53" />
        <meta name="apple-mobile-web-app-title" content="Lateral Cast" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="application-name" content="Lateral Cast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lateralcast.vercel.app/" />
        <meta property="og:title" content="Lateral Cast" />
        <meta
          property="og:description"
          content="A party game about interesting quiz questions, and even more interesting answers"
        />
        <meta
          property="og:image"
          content="https://lateralcast.vercel.app/social.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lateralcast.vercel.app/" />
        <meta property="twitter:title" content="Design Social Club" />
        <meta
          property="twitter:description"
          content="A party game about interesting quiz questions, and even more interesting answers"
        />
        <meta
          property="twitter:image"
          content="https://lateralcast.vercel.app/social.png"
        />
        <meta
          name="description"
          content="A party game about interesting quiz questions, and even more interesting answers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242B53" />
        <meta name="msapplication-TileColor" content="#242B53" />
      </Head>
      <main
        className={`${inter.variable} ${color} h-full w-full rounded-2xl font-['Inter'] max-w-xl max-h-full overflow-hidden flex flex-col border-white border-2 relative`}
      >
        <Link
          className="z-10 absolute inline-block right-10 top-6 rounded-full bg-white p-2"
          href="/"
        >
          <MdClose className="text-4xl" />
        </Link>
        <section className="max-h-full overflow-y-auto py-8">
          <header className="p-8">
            <h1>
              <span className="text-2xl block">{question.emoji}</span>
              <span className="text-4xl font-extrabold block">
                {question.title}
              </span>
            </h1>
            <div
              className="font-medium mt-6 text-md"
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
          </header>
          <div>
            <DetailView title="Hints">
              <Tips tips={question.tips} />
            </DetailView>
            <DetailView title="Answer">
              <div
                className="text-md font-medium"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              />
              {question.answerImage ? (
                <ImageZoom image={question.answerImage} />
              ) : null}
            </DetailView>
            <DetailView title="LateralCast">
              <p className="text-md font-medium">{`Originally appeared on LateralCast ${question.episode}`}</p>
              <div className="flex flex-col gap-2 my-4">
                <Button
                  text="Listen on Spotify"
                  type="link"
                  href={question.episodeLink}
                  icon={<FaSpotify className="text-lg" />}
                />
                <Button
                  text="Watch Highlight"
                  type="link"
                  href={question.highlights}
                  icon={<FaYoutube className="text-lg" />}
                />
              </div>
            </DetailView>
          </div>
        </section>
      </main>
    </Layout>
  );
}
