import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

const Footer: NextComponentType = () => {
  let date: Date = new Date(Date.now());
  return (
    <footer className="flex flex-col mx-5 my-10 text-center">
      <h3>Made by Balaji</h3>
      <div className="my-3 flex flex-row align-middle justify-center">
        <div className="hover:shadow-lg mr-4 rounded-md p-2 h-16 shadow-md">
          <Link href="https://github.com/Balaji-200">
            <a>
              <Image src="/github.png" width={48} height={48}></Image>
            </a>
          </Link>
        </div>
        <div className="shadow-md hover:shadow-lg ml-4 rounded-md p-2 h-16">
          <Link href="https://www.linkedin.com/in/balaji-durai-a216601ab">
            <a>
              <Image src="/linked-in.png" width={48} height={48}></Image>
            </a>
          </Link>
        </div>
      </div>
      <h4>
        Copyrights &copy;{date.getFullYear()}-{date.getFullYear() + 1}
      </h4>
    </footer>
  );
};

export default Footer;
