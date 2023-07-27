import { Inter } from "next/font/google";
import { getHomeData } from "@/lib/api";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--inter-font",
});

// export async function getStaticProps() {
//   const response = await getHomeData();
//   return { props: { home: response?.home, articles: response?.allArticles } };
// }

export default function Home({ home, articles }) {
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
        className={`${inter.variable} bg-slate-50 h-full w-full rounded-2xl font-['Inter'] max-w-xl max-h-full overflow-hidden flex flex-col border-white border-2`}
      >
        <header className="p-8 py-12 border-b-slate-400 border-b-2">
          <Image
            src="/logo.png"
            alt="lateralcast logo"
            width="256"
            height="35"
            className="h-auto"
          />
          <h2 className="uppercase font-black text-xl leading-none mt-1">
            The party game
          </h2>
          <p className="text-sm font-medium my-4">
            A party game about interesting quiz questions, and even more
            interesting answers, based on the podcast hosted by Tom Scott.
          </p>
          <button className="bg-black text-white text-sm py-4 px-8 rounded-full font-bold">
            How to play
          </button>
        </header>
        <div className="overflow-y-auto">
          <div className="px-8 py-6 bg-orange-100 my-0.5">
            <h3 className="font-bold text-sm truncate">
              The elevator where you're "born again".
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}
