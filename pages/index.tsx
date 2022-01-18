import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import NewsSegment from "../components/NewsSegment";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { generateId, parseDate } from "../utils/helper";
const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBar />
      {props.articles.map((article: any) => (
        <NewsSegment
          imgSrc={article.urlToImage}
          title={article.title}
          name={article.source.name}
          link={article.url}
          key={generateId()}
          date={parseDate(article.publishedAt)}
        ></NewsSegment>
      ))}
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Promise<Object>> = async (ctx) => {
  let uri: string = process.env["API_URL"]!;
  let url: string = encodeURI(uri + "top-headlines?country=in");
  let response = await fetch(url, {
    headers: new Headers({
      "X-API-Key": process.env["API_KEY"] || "",
    }),
  });
  let data = await response.json();
  return {
    props: data,
  };
};

export default Home;
