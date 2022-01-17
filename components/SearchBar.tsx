import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import React from "react";
import styles from "./Component.module.css";
interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}
interface SearchForm extends HTMLFormElement {
  readonly elements: FormElements;
}
const SearchBar: React.FC = () => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const handleSubmit = (e: React.FormEvent<SearchForm>): void => {
    e.preventDefault();
    if (
      e.currentTarget.search.value != "" &&
      e.currentTarget.search.value != null
    )
      router.push(`/articles?search=${e.currentTarget.search.value}`);
    else setIsEmpty(true);
  };
  return (
    <div>
      <form
        className="flex flex-row md:m-5 my-5 mx-3 justify-center"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="search"></label>
        <input
          className={
            styles.border1 + " rounded-full shadow-lg px-4 py-2 md:w-3/5 w-4/5"
          }
          type="text"
          id="search"
          placeholder="Search for news"
          autoFocus
        />
        <button
          className={
            "md:px-5 md:py-2 py-0 px-3 rounded-full text-white bg-blue-500 hover:bg-blue-700 md:ml-5 ml-3 shadow-sm hover:shadow-lg"
          }
          type="submit"
        >
          Search
        </button>
      </form>
      {isEmpty ? (
        <div className={"mx-auto md:w-1/3 p-2 md:text-base text-sm"}>
          <div className="bg-red-500 py-2 animate-bounce rounded-md flex flex-row justify-between align-middle text-white">
            <h4 className="font-roboto ml-4">
              Search cannot be empty, Type Something!
            </h4>
            <div className="align-middle">
              <button
                className="mr-5 rounded-full bg-white h-6 w-6 text-red-500 text-center"
                onClick={() => setIsEmpty(false)}
              >
                &#x2715;
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default SearchBar;
