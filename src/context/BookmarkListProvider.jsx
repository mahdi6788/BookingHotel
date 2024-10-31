import { useContext, useState } from "react";
import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BookMarkList = createContext();

function BookmarkListProvider({ children }) {
  const URL = "http://localhost:5000/bookmarks";

  const { data: bookmarks, isLoading } = useFetch(URL, "");

  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] =
    useState(false);

  async function getsingleBookmark(id) {
    setIsLoadingCurrentBookmark(true);
    try {
      const { data } = await axios.get(`${URL}/${id}`);
      setCurrentBookmark(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurrentBookmark(false);
    }
  }

  return (
    <BookMarkList.Provider
      value={{
        bookmarks,
        isLoading,
        getsingleBookmark,
        isLoadingCurrentBookmark,
        currentBookmark,
      }}
    >
      {children}
    </BookMarkList.Provider>
  );
}

export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookMarkList);
}
