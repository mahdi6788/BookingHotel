import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookMarkList = createContext();

function BookmarkListProvider({ children }) {
  const URL = "http://localhost:5000/bookmarks";

  const [currentBookmark, setCurrentBookmark] = useState(null);

  const [bookmarks, setBookmarks] = useState([])
  const [isLoading, setIsLoading] = useState(false)


/// here we get all bookmarks
useEffect(() => {
  async function fetchBookmarkList() {
    setIsLoading(true);
    try {
      const { data } = await axios.get(URL);
      setBookmarks(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  } fetchBookmarkList()

}, [URL])

    /// here we get data from dataset with this url and id
  async function getsingleBookmark(id) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/${id}`);
      setCurrentBookmark(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }
/// here we post new created bookmark to the dataset in this url
  async function createBookmark(newBookmark) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(URL, newBookmark);
      setCurrentBookmark(data);
      setBookmarks(prev => [...prev, data])
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <BookMarkList.Provider
      value={{
        bookmarks,
        isLoading,
        getsingleBookmark,
        currentBookmark,
        createBookmark
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
