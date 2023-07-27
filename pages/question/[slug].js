import { Inter } from "next/font/google";
import { getAllQuestionSlugs, getQuestionData } from "@/lib/api";
import Head from "next/head";
import { findColorByIndex } from "@/lib/findColorByIndex";
import DetailView from "@/components/DetailView";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import Button from "@/components/Button";

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
    <>
      <Head>
        <title>Lateral Cast</title>
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#242B53" />
        <meta name="apple-mobile-web-app-title" content="Design Social Club" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="application-name" content="Design Social Club" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://designsocial.club/" />
        <meta property="og:title" content="Design Social Club" />
        <meta
          property="og:description"
          content="Vamos juntar designers com projetos reais de impacto social."
        />
        <meta
          property="og:image"
          content="https://designsocial.club/social.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://designsocial.club/" />
        <meta property="twitter:title" content="Design Social Club" />
        <meta
          property="twitter:description"
          content="Vamos juntar designers com projetos reais de impacto social."
        />
        <meta
          property="twitter:image"
          content="https://designsocial.club/social.png"
        />
        <meta
          name="description"
          content="Vamos juntar designers com projetos reais de impacto social."
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
              className="font-medium mt-6 text-sm"
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
          </header>
          <div>
            <DetailView title="Hints">
              <div className="my-2">
                {question.tips.map((tip) => (
                  <div
                    className="p-6 border-4 rounded-md border-black font-bold text-sm"
                    key={tip.key}
                  >
                    {tip.tip}
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">{`Tip 1/${question.tips.length}`}</div>
            </DetailView>
            <DetailView title="Answer">
              <div
                className="text-sm font-medium"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              />
              <div className="max-w-[10rem] border-4 rounded-md border-black my-4 mx-auto">
                <Image
                  className="aspect-square object-cover border-4 rounded-md border-white"
                  alt={question.answerImage.alt}
                  src={question.answerImage.url}
                  height={question.answerImage.height}
                  width={question.answerImage.width}
                />
              </div>
            </DetailView>
            <DetailView title="LateralCast">
              <p className="text-sm font-medium">{`Originally appeared on LateralCast ${question.episode}`}</p>
              <div className="flex flex-col gap-2 my-4">
                <Button
                  text="Listen on Spotify"
                  type="link"
                  href={question.episodeLink}
                  icon={<FaSpotify className="text-lg" />}
                />
                <Button
                  text="Watch Highlight on Youtube"
                  type="link"
                  href={question.highlights}
                  icon={<FaYoutube className="text-lg" />}
                />
              </div>
            </DetailView>
          </div>
        </section>
      </main>
    </>
  );
}
