import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

/// *** create context
const BookMarkList = createContext();

/// *** make function for contex provider
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

  async function deleteBookmark(id){
    setIsLoading(true)
    try {
      await axios.delete(`${URL}/${id}`)
      setBookmarks(prev => prev.filter(item => item.id !== id))
    } catch (error) {
      toast.error(error.message)
    } finally {
    setIsLoading(false)
    }
  }

/// *** return values containing states and functions created here in provider
  return (
    <BookMarkList.Provider
      value={{
        bookmarks,
        isLoading,
        getsingleBookmark,
        currentBookmark,
        createBookmark,
        deleteBookmark
      }}
    >
      {children}
    </BookMarkList.Provider>
  );
}

export default BookmarkListProvider;

/// *** useContext to use created context and we can call this function useBookmark in any component and use the values
export function useBookmark() {
  return useContext(BookMarkList);
}
