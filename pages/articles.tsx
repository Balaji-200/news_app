import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import NewsSegment from "../components/NewsSegment";
import { generateId, parseDate } from "../utils/helper";
import Footer from "../components/Footer";

const Article: NextPage = (props: any) => {
  const router = useRouter();
  return (
    <div>
      <h1 className="mt-5 ml-4">
        Showing results for&nbsp;
        <span className="text-blue-400">{router.query.search}</span>
      </h1>
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
      <Footer></Footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Promise<Object>> = async (
  ctx
) => {
  let res: Response = await fetch(
    `http://localhost:3000/api/articles?q=${ctx.query.search}`
  );
  if (res.status != 200) console.error(res);
  let data = await res.json();
  return {
    props: data,
  };
};

export default Article;
