import Link from "next/link";
import { NewsSegmentInterface } from "../interfaces/newsSegmentInterface";

const NewsSegment: React.FC<NewsSegmentInterface> = (
  props: NewsSegmentInterface
) => {
  return (
    <Link href={props.link} >
      <article className="flex flex-col md:flex-row align-top rounded-lg shadow-md mt-10 font-sans hover:shadow-xl transition-all w-11/12 md:w-3/4 mx-auto hover: cursor-pointer">
        <img
          src={props.imgSrc}
          alt={props.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <article className="md:ml-10 flex flex-col justify-between md:p-5 p-3">
          <h1 className="font-bold">{props.title}</h1>
          <div className="flex flex-row justify-between mt-5">
          <h6 className="font-semi-bold text-xs">{props.name}</h6>
          <h6 className="font-light text-xs">{props.date.toDateString()}</h6>
          </div>
        </article>
      </article>
    </Link>
  );
};

export default NewsSegment;
