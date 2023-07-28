import { Inter } from "next/font/google";
import { getAllQuestionSlugs, getQuestionData } from "@/lib/api";
import Head from "next/head";
import { findColorByIndex } from "@/lib/findColorByIndex";
import DetailView from "@/components/DetailView";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FaExternalLinkAlt, FaSpotify, FaYoutube } from "react-icons/fa";
import Button from "@/components/Button";
import Tips from "@/components/Tips";
import ImageZoom from "@/components/ImageZoom";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--inter-font",
});

export default function HowToPlay({ question }) {
  return (
    <Layout>
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
        className={`${inter.variable} bg-white h-full w-full rounded-2xl font-['Inter'] max-w-xl max-h-full overflow-hidden flex flex-col border-white border-2 relative`}
      >
        <Link
          className="z-10 absolute inline-block right-10 top-6 rounded-full bg-white p-2 border-black border"
          href="/"
        >
          <MdClose className="text-4xl text-black" />
        </Link>
        <section className="max-h-full overflow-y-auto py-8">
          <header className="p-8">
            <h1>
              <span className="text-4xl font-extrabold block">How to Play</span>
            </h1>
            <div className="font-medium mt-6 text-md">
              <p className="my-2">
                A party game based on the Lateral Podcast, about weird questions with wonderful answers.
              </p>
              <p className="my-2">
                One of the players will be the host, and will choose a question
                for all the other players to discuss and find the correct
                answer. A few hints will be provided to help the host steer the
                other participants into the right direction. Once the answer is
                found, another player takes the role of the host.
              </p>
              <p className="my-2">
                There is no points or prizes - just reputation and bragging
                rights on the line.
              </p>
              <div className="my-6">
              <Button type="link" href="https://lateralcast.com/" text="About the show" icon={<FaExternalLinkAlt />} />
              </div>
            </div>
          </header>
          <div></div>
        </section>
      </main>
    </Layout>
  );
}
