import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import LocationList from "./components/locationList/LocationList";
import { Route, Routes } from "react-router-dom";
import Hotels from "./components/Hotels";
import SingleHotel from "./components/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout";
import BookmarkListProvider from "./context/BookmarkListProvider";
import Bookmark from "./components/bookmark/Bookmark";
import HotelsProvider from "./context/HotelsProvider";
import AppLayout from "./components/AppLayout";
import SingleBookmark from "./components/singleBookmark/SingleBookmark";
import AddNewBookmark from "./components/AddNewBookmark/AddNewBookmark";
import Login from "./components/Login";
import AuthContextProvider from "./context/AuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <BookmarkListProvider>
        <HotelsProvider>
          <div>
            <Toaster />
            <Header />
            <Routes>
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<LocationList />} />
              <Route path="/hotels" element={<AppLayout />}>
                <Route index element={<Hotels />} />
                <Route path=":id" element={<SingleHotel />} />
              </Route>
              <Route
                path="/bookmark"
                element={
                  <ProtectedRoute>
                    <BookmarkLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Bookmark />} />
                <Route path="add" element={<AddNewBookmark />} />
                <Route path=":id" element={<SingleBookmark />} />
              </Route>
            </Routes>
          </div>
        </HotelsProvider>
      </BookmarkListProvider>
    </AuthContextProvider>
  );
}

export default App;
